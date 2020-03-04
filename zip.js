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
zipfile.directory('build', false)
zipfile.finalize()
