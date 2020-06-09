const fs = require('fs')

const read = filename => fs.readFileSync(
  `${__dirname}/originals/${filename}`,
  { encoding: 'utf-8' }
)

const write = (filename, content) => {
  const dirname = `${__dirname}/changed`
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname)
  }
  fs.writeFileSync(`${dirname}/${filename}`, content, { encoding: 'utf-8' })
}

module.exports = { read, write }
