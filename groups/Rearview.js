const text1 = '<b>Destaque</b><strong>Forte</strong><div>Conteúdo</div>'
console.log(text1.match(/<(\w+)>.*<\/\1>/g))

const text2 = 'Lentamente é mente muito lenta.'
console.log(text2.match(/(lenta)(mente).*\2.*\1\./gi))
console.log(text2.match(/(?:lenta)(mente).*\1/gi)) // ?: doesn't store the group content

console.log(text2.match(/(lenta)(mente)/gi))
console.log(text2.match(/(lenta)(mente)?/gi))
console.log(text2.replace(/(lenta)(mente)/gi, '$2'))
