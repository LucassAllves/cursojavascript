// Cloures é o escopo criado quando uma function é declarada 
//Esse escopo permite a funcao acessar e manipular variavéis externas a função ou seja que estaja acima.
//Ou seja Cloures é quando ele trata o scopo lexico da função de tudo a sua volta 


// Contexto léxica em ação !! 

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFunction = fora()
console.log(minhaFunction())