import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const clientDir = path.join(root, "dist", "client");
const clientAssetsDir = path.join(clientDir, "assets");
const serverAssetsDir = path.join(root, "dist", "server", "assets");

async function findFile(dir, predicate) {
  const files = await readdir(dir);
  return files.find(predicate);
}

async function main() {
  const manifestName = await findFile(serverAssetsDir, (f) =>
    f.startsWith("_tanstack-start-manifest_") && f.endsWith(".js"),
  );

  if (!manifestName) {
    throw new Error("Could not find TanStack Start manifest in dist/server/assets.");
  }

  const manifestPath = path.join(serverAssetsDir, manifestName);
  const manifestContent = await readFile(manifestPath, "utf8");

  const scriptMatch = manifestContent.match(/src: "\\/assets\\/([^\"]+)"/);
  if (!scriptMatch?.[1]) {
    throw new Error("Could not find root script entry in TanStack Start manifest.");
  }

  const entryScript = scriptMatch[1];

  const styleFile = await findFile(clientAssetsDir, (f) =>
    f.startsWith("styles-") && f.endsWith(".css"),
  );

  if (!styleFile) {
    throw new Error("Could not find styles file in dist/client/assets.");
  }

  const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CarbonSmart Solutions Africa</title>
    <link rel="stylesheet" href="/assets/${styleFile}" />
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/assets/${entryScript}"></script>
  </body>
</html>
`;

  await writeFile(path.join(clientDir, "index.html"), indexHtml, "utf8");
  await writeFile(path.join(clientDir, "_redirects"), "/* /index.html 200\n", "utf8");

  console.log(`Render static shell generated with ${entryScript} and ${styleFile}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
