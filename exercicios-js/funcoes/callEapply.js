// serve para chamar function 

function getPreco(imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco * (1 - this.desc) * (1+ imposto)}`

}

const produto = {
    nome: "Notebook", 
    preco: 4589,
    desc: 0.15,
    getPreco
}
global.preco = 20 //aqui ele so pega aporque insaviamos o valor de preco
global.desc = 0.1//aqui de desc
console.log(getPreco())//ai ele imprimiu o valor de 18 con desconto e nao do valor do notbook
console.log(produto.getPreco())

const carro = {preco: 499999, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))//sempre primeiro o contexto depois os valores do parametros 
console.log(getPreco.apply(carro, [0.17, '$']))//esse espera um [array]



