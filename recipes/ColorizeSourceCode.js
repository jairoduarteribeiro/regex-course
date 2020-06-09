const applyColor = (text, regex, color) => text.replace(
  regex,
  `<span style="color: #${color}"><b>$1</b></span>`
)

const files = require('./files')
const text = files.read('sourceCode.html')

const codeRegex = /<code>[\s\S]*<\/code>/i
let code = text.match(codeRegex)[0]

// Strings...
code = applyColor(code, /(\".*\")/g, 'ce9178')
console.log(code)
