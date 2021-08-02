//Apenderemos os valores por atribuições !!
const a = 7
let b = 3

b += a  //seria a mesmo que "b = b + a" atribuição aditiva, serve para somar o valor de "B" com o calor de "A"
console.log(b)//Ex. 10

b -= 4 // "b = b - 4" atribuição subtativa
console.log(b) //Ex. 6

b *= 2  // "b = b * 2" atribuição multiplicativa
console.log(b)

b /= 2 // b = b / 2 atribuição divisiva
console.log(b) //Ex. 6

b %=  2 // b = b % 2  atribuição por modulo... pega o resto da divisão! que 6/2= 3 e sobra "ZERO"
console.log(b) //Ex. 0