const sharp = require('sharp')
const path = require('path')

const input = path.join(__dirname, '../public/Logo.png')
const output = path.join(__dirname, '../public')

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
  { name: 'mstile-150x150.png', size: 150 },
]

async function generate() {
  for (const { name, size } of sizes) {
    await sharp(input)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(output, name))
    console.log(`Generated ${name}`)
  }
  console.log('All favicons generated.')
}

generate().catch(console.error)
