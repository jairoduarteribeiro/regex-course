const text1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

console.log(text1.match(/\bdia\w+/gi))
console.log(text1.match(/\w+dia\b/gi))
console.log(text1.match(/\w+dia\w+/gi))
console.log(text1.match(/\bdia\b/gi))

const text2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'

console.log(text2.match(/\bdia\b/gi))
console.log(text2.match(/(\S*)?dia(\S*)?/gi)) // includes comma (,)
console.log(text2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi))
