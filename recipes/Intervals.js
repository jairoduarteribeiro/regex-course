const text = '0 1 10 192 199 201 249 255 256 312 1010 1512'

// numbers from 0 to 255
console.log(text.match(/\b(\d{1,2})\b/g))
