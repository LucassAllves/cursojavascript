
let valor //não incializada udefined 

console.log(valor)//Ex. undefined





valor = null   //significa ausência de valor, não aponta para nenhum objeto da memória 

console.log(valor) //Ex: null 

//console.log(valor.toString())//Ex: Cannot read property 'toString' of null







const produto = {}

console.log(produto.preco)//ex:undefined. porque não tem o valor de "produto"

console.log(produto)//ex: {}



produto.preco = 3.59

console.log(produto) //Ex. { preco: 3.59 }



produto.preco = undefined //evie atribuir undefined

console.log(!!produto.preco) //Ex. False

delete produto.preco // Ex. {} //melhor forma para se deletar um objeto

console.log(produto)//Ex. { preco: undefined }



produto.preco = null // sem preço ou 0

console.log(!!produto.preco)//Ex.false

console.log(produto)