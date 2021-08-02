//factory serve para retornar objectos para não deixar seu codigo repetitivo
//e nesse ainda retorna os valores setados no function  

function criarProduto (nome, preco) {
    return {
        nome, 
        preco,
        desconto: 0.1

    }
}
console.log(criarProduto('notebook', 2199.00))
console.log(criarProduto('ipad', 199.00))
console.log(criarProduto('celular', 2199.00))