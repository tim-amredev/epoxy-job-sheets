// This is a Node.js script to generate favicon files from logo.svg
// You would run this script during build or development
// Note: This requires the 'sharp' and 'fs-extra' npm packages

const sharp = require("sharp")
const fs = require("fs-extra")
const path = require("path")

const SOURCE_SVG = path.join(__dirname, "../images/logo.svg")
const OUTPUT_DIR = path.join(__dirname, "../images")

// Ensure output directory exists
fs.ensureDirSync(OUTPUT_DIR)

// Define sizes for different favicon formats
const sizes = {
  "favicon-16x16.png": 16,
  "favicon-32x32.png": 32,
  "apple-touch-icon.png": 180,
  "android-chrome-192x192.png": 192,
  "android-chrome-512x512.png": 512,
  "mstile-70x70.png": 70,
  "mstile-144x144.png": 144,
  "mstile-150x150.png": 150,
  "mstile-310x150.png": [310, 150], // [width, height]
  "mstile-310x310.png": 310,
}

// Generate favicon.ico (multi-size ICO file)
sharp(SOURCE_SVG)
  .resize(32, 32)
  .toFormat("ico")
  .toFile(path.join(OUTPUT_DIR, "favicon.ico"))
  .then(() => console.log("Generated favicon.ico"))
  .catch((err) => console.error("Error generating favicon.ico:", err))

// Generate PNG files in various sizes
Object.entries(sizes).forEach(([filename, size]) => {
  const options = Array.isArray(size) ? { width: size[0], height: size[1] } : { width: size, height: size }

  sharp(SOURCE_SVG)
    .resize(options)
    .toFormat("png")
    .toFile(path.join(OUTPUT_DIR, filename))
    .then(() => console.log(`Generated ${filename}`))
    .catch((err) => console.error(`Error generating ${filename}:`, err))
})

console.log("Favicon generation complete!")

