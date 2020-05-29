const text = '.$+*?-'

console.log(text.match(/[+.?*$]./g))  // doesn't need a escape inside the set
console.log(text.match(/[$-?]/g))     // this is a range

// these aren't ranges
console.log(text.match(/[$\-?]/g))
console.log(text.match(/[-?]/g))

// might need a escape: - [ ] ^
