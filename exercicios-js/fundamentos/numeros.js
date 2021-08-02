const pessoa1 = 1.0
const pessoa2 = Number("5.0")


console.log(pessoa1, pessoa2)
console.log(Number.isInteger(pessoa1)) // isInteger = é inteiro. Serve para saber se o valor é inteiro.
console.log(Number.isInteger(pessoa2))

const  avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * pessoa1 + avaliacao2 * pessoa2
const media = total / (pessoa1 + pessoa2)

console.log(media.toFixed(2)) // toFixed = para concertar, serve para diminuir as casas decimais  ex: 7.371000000000001 em 7.37 
console.log(media.toString()) // toString = para sequencial, serve para tranformar de  7.37  para  7.371000000000001 
console.log(media.toString(2))// quando colocado por 2 torna em numero binário  que ficaria exemplo .; 111.01011110111110011101101100100010110100001110010111
console.log(typeof media) //type of  = tipo de, Serve para saber o tipo do valor da variável  
console.log(typeof  Number)  // Number é uma função e não o valor do númerico .                                                                