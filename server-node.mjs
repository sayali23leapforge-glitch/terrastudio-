import { createServer } from "node:http";
import { Readable } from "node:stream";
import { stat } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || "0.0.0.0";

const serverBuildPath = path.resolve("dist/server/server.js");

async function ensureBuildExists() {
  try {
    await stat(serverBuildPath);
  } catch {
    throw new Error(
      "Missing dist/server/server.js. Run `npm run build` before starting the server.",
    );
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
