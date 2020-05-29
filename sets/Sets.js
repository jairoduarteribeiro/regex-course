const text = '1,2,3,4,5,6,a.b c!d?e[f'
const regexEvenNumbers = /[02468]/g
console.log(text.match(regexEvenNumbers))

const text2 = 'João não vai passear na moto.'
const regexWithOrWithoutAccents = /n[aã]/g
console.log(text2.match(regexWithOrWithoutAccents))
