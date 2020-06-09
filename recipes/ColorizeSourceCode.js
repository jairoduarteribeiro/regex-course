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

// Keywords...
code = applyColor(code, /\b(package|public|class|static|if|else)\b/g, 'd857cf')

// Types...
code = applyColor(code, /\b(void|int)\b/g, '1385e2')
console.log(code)
