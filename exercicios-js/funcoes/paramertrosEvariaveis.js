// Vamos aprender a usar o argumests que retorna um array próprio da linguagem.
function soma() {
    let soma = 0 
    for (i in arguments) {
        soma += arguments[i]  // arguments recebe soma.
    }
     return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))// aqui retornara 6.6 porque arguments recebe todo o arrey da variavel soma .... top nao 

console.log(soma(1.1, 2.2, "Teste")) // e aqui ficou  3.3000000000000003Teste ou seja ele realmente soma tudo !!! 
console.log(soma('a', 'b', 'c')) // aqui ficou 0abc
 