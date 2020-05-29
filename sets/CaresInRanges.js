const text = 'ABC [abc] a-c 1234'

console.log(text.match(/[a-c]/g))
console.log(text.match(/a-c/g))   // it's not a range

console.log(text.match(/[A-z]/g))

// the order in unicode table is important
// console.log(text.match(/[a-Z]/g))
// console.log(text.match(/[4-1]/g))
