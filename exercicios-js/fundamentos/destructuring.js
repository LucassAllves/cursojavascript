//novo recurso so ES2015

const pessoa = {
    nome: "Lucas H",
    idade: "27",
    endereco:   {
        logradouro:"Rua Baltazar",
        numero: 1000
    }
}
//descrontuimos ou estraindo o construtor da variavél separando "nome", e "idade" de pessoa
const { nome, idade } = pessoa
console.log(nome, idade)// Ex. Lucas H 27

//podemos desconstruir desta forma tbm ! 
const { nome: n, idade: i} = pessoa         //estraimos da variável pessoa o nome e idade !
console.log(n, i) //Ex. Lucas H 27


const { endereco: {logradouro, numero, cep } } = pessoa //está olhando para dentro de endereço e pegando os valores de "logradouro" e "numero"
console.log(logradouro, numero, cep)//Ex. Rua Baltazar 1000 undefined 