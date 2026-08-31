import sharp from "sharp";
import path from "node:path";

const input = path.resolve("public/images/hero/gaming-setup-wide.jpg");
const outputDir = path.resolve("public/images/hero");
const aspectHeight = (width) => Math.round((width * 9) / 16);

const image = sharp(input);
const metadata = await image.metadata();
console.log(`source ${metadata.width}x${metadata.height} ${metadata.format}`);

const webpWidths = [720, 960, 1200];

for (const width of webpWidths) {
  const height = aspectHeight(width);
  const file = path.join(outputDir, `gaming-setup-wide-${width}.webp`);
  await sharp(input)
    .resize(width, height, { fit: "cover", position: "attention" })
    .webp({ quality: 72, effort: 6 })
    .toFile(file);
  console.log(`wrote ${file}`);
}

const fallback = path.join(outputDir, "gaming-setup-wide-960.jpg");
await sharp(input)
  .resize(960, aspectHeight(960), { fit: "cover", position: "attention" })
  .jpeg({ quality: 78, mozjpeg: true })
  .toFile(fallback);
console.log(`wrote ${fallback}`);
