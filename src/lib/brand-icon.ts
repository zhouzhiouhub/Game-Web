import { readFile } from "node:fs/promises";
import path from "node:path";

export async function getBrandIconDataUri() {
  const bytes = await readFile(path.join(process.cwd(), "public/icon-512.png"));

  return `data:image/png;base64,${bytes.toString("base64")}`;
}
