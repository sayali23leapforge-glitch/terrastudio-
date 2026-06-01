import { createServer } from "node:http";
import { Readable } from "node:stream";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || "0.0.0.0";

const serverBuildPath = path.resolve("dist/server/server.js");
const clientBuildPath = path.resolve("dist/client");

const CONTENT_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".html": "text/html; charset=utf-8",
};

async function ensureBuildExists() {
  try {
    await stat(serverBuildPath);
    await stat(clientBuildPath);
  } catch {
    throw new Error(
      "Missing dist build output. Run `npm run build` before starting the server.",
    );
  }
}

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return CONTENT_TYPES[ext] ?? "application/octet-stream";
}

async function tryServeStaticFile(req, res) {
  const rawPath = (req.url || "/").split("?")[0];
  if (!rawPath || rawPath === "/") return false;

  const normalizedPath = path
    .normalize(decodeURIComponent(rawPath))
    .replace(/^([/\\])+/, "");

  const fullPath = path.join(clientBuildPath, normalizedPath);
  const rel = path.relative(clientBuildPath, fullPath);
  if (rel.startsWith("..") || path.isAbsolute(rel)) return false;

  try {
    const fileStat = await stat(fullPath);
    if (!fileStat.isFile()) return false;

    res.statusCode = 200;
    res.setHeader("content-type", getContentType(fullPath));
    res.setHeader("cache-control", rawPath.startsWith("/assets/") ? "public, max-age=31536000, immutable" : "public, max-age=300");
    createReadStream(fullPath).pipe(res);
    return true;
  } catch {
    return false;
  }
}

function getRequestBody(req) {
  const method = req.method || "GET";
  if (method === "GET" || method === "HEAD") return undefined;
  return Readable.toWeb(req);
}

function toRequest(req) {
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers.host || `localhost:${PORT}`;
  const url = new URL(req.url || "/", `${protocol}://${host}`);

  return new Request(url, {
    method: req.method,
    headers: req.headers,
    body: getRequestBody(req),
    duplex: "half",
  });
}

function writeResponse(nodeRes, webRes) {
  nodeRes.statusCode = webRes.status;

  for (const [key, value] of webRes.headers) {
    nodeRes.setHeader(key, value);
  }

  if (!webRes.body) {
    nodeRes.end();
    return;
  }

  Readable.fromWeb(webRes.body).pipe(nodeRes);
}

function handleApiRoutes(req, res) {
  if (req.url === "/api/health") {
    res.statusCode = 200;
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.end(
      JSON.stringify({
        ok: true,
        service: "terra-pulse-studio",
        timestamp: new Date().toISOString(),
      }),
    );
    return true;
  }

  return false;
}

async function start() {
  await ensureBuildExists();

  const mod = await import(pathToFileURL(serverBuildPath).href);
  const app = mod.default ?? mod;

  if (!app || typeof app.fetch !== "function") {
    throw new Error("Invalid server build: expected a default export with fetch(request).");
  }

  const server = createServer(async (req, res) => {
    try {
      if (await tryServeStaticFile(req, res)) return;
      if (handleApiRoutes(req, res)) return;

      const request = toRequest(req);
      const response = await app.fetch(request, process.env, {});
      writeResponse(res, response);
    } catch (error) {
      console.error(error);
      res.statusCode = 500;
      res.setHeader("content-type", "text/plain; charset=utf-8");
      res.end("Internal Server Error");
    }
  });

  server.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
  });
}

start().catch((error) => {
  console.error(error);
  process.exit(1);
});
