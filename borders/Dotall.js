const text = 'Romário era um excelente jogador\n, mas hoje é um político questionador'
console.log(text.match(/^r.*r$/gi))       // dotall problem
console.log(text.match(/^r[\s\S]*r$/gi))  // solution
