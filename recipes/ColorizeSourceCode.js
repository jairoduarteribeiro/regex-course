const applyColor = (text, regex, color) => text.replace(
  regex,
  `<span style="color: #${color}"><b>$1</b></span>`
)

const files = require('./files')
const text = files.read('sourceCode.html')
console.log(text)
