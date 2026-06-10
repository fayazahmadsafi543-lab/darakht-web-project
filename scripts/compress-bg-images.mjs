import sharp from "sharp";
import { rename, unlink } from "fs/promises";
import path from "path";

const publicDir = path.join(process.cwd(), "public");
const files = ["hero-tech-bg.jpg", "welcome-bg.jpg"];

for (const file of files) {
  const input = path.join(publicDir, file);
  const tmp = path.join(publicDir, `_opt_${file}`);
  await sharp(input)
    .resize(1920, null, { withoutEnlargement: true, fit: "inside" })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(tmp);
  await unlink(input).catch(() => {});
  await rename(tmp, input);
  console.log(`Optimized ${file}`);
}
