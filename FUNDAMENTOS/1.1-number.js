var peso1 = 7.7 //
var peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const prova1 = 9.50
const prova2 = 5.65

const total = prova1 * peso1 + prova2 * peso2 
const media = total / (peso1 + peso2)
console.log(media.toFixed(2))
console.log(media.toString(2))

