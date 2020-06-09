const text = 'João é calmo, mas no trânsito fica nervoso.'
console.log(text.match(/[\wÀ-ú]+/gi))

// positive lookahead
console.log(text.match(/[\wÀ-ú]+(?=,)/gi))
console.log(text.match(/[\wÀ-ú]+(?=\.)/gi))
console.log(text.match(/[\wÀ-ú]+(?=, mas)/gi))

// negative lookahead
console.log(text.match(/[\wÀ-ú]+\b(?!,)/gi))
console.log(text.match(/[\wÀ-ú]+[\s|\.](?!,)/gi)) // fix é
