const text = 'Pedrinho (filho do Pedro Silva) é doutor do ABCabc!'

console.log(text.match(/[(abc)]/gi))  // it's not a group
console.log(text.match(/([abc])/gi))
console.log(text.match(/(abc)+/gi))
