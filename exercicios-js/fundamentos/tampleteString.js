const nome = "Rebeca"
const concatenacao = 'Olá ' + nome + "!"  //ex: Olá Rebeca! 
// Tamplate = modelo, Serve para concatenar sem o + e ainda permite fazer a quebra de linha ! ex:Olá 
//Rebeca
const template = ` 
Olá 
${nome}`

console.log(concatenacao, template)

// explessões... ex:1 + 1 = 2
console.log(`1 + 1 = ${1 + 1}`) 

const up = text => text.toUpperCase() //criamos uma função que "to Epper Case" (para maiúscula) e concatenamos !
console.log(`Ei... ${up('cuidado ')}!`) //Exemplo: Ei... CUIDADO !

