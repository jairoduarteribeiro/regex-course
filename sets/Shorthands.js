const texto = `1,2,3,4,5,6,a.b c!d?e\r\f	-
f_g`

console.log(texto.match(/\d/g))	// numbers			[0-9]
console.log(texto.match(/\D/g))	// not numbers		[^0-9]

console.log(texto.match(/\w/g))	// characters 		[a-zA-Z0-9_]
console.log(texto.match(/\W/g))	// not characters 	[^a-zA-Z0-9_]

console.log(texto.match(/\s/g))	// whitespaces		[ \t\n\r\f]
console.log(texto.match(/\S/g))	// not whitespaces	[^ \t\n\r\f]
