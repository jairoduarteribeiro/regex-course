// . can be changed for any character
const text = '1,2,3,4,5,6,7,8,9,0'

console.log(text.match(/1.2/g))
console.log(text.match(/1..2/g))
console.log(text.match(/1..,/g))

const grades = '8.3,7.1,8.8,10.0'

console.log(grades.match(/8../g))
console.log(grades.match(/.\../g)) // doesn't work
