// Armazenado uma função dentro da variavel 
const imprimirSoma = function (a, b) {
    console.log(a + b)
} 
imprimirSoma(2, 3)// Ex.5

//Armazenando uma funcao arow em uma variavel 
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 5))//Ex.7

// retorno implícito
const subracao = (a, b) => a - b
console.log(subracao(2, 3))//Ex.-1

const imprimir2 = a => console.log(a)
imprimir2("Legal !!!!")//Ex.Legal !!!!