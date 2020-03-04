const archiver = require('archiver')
const fs = require('fs')

const output = fs.createWriteStream('dist.zip')
output.on('close', () => {
  console.log('dist.zip created')
})
const zipfile = archiver('zip')
zipfile.on('error', (err) => {
  throw err
})
zipfile.pipe(output)
zipfile.file('app.js')
zipfile.file('config.js')
zipfile.glob('src/**')
zipfile.glob('./build/**')
zipfile.finalize()
