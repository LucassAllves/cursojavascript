// Coleção dinamica de pares chaves/valor

//Vamos adicionar objectos para a constante produto.
const  produto = new Object
 produto.nome = 'Cadeira'
 produto['Marca do produto'] = 'Generica'
 produto.preco = 220 

 console.log(produto)

//excluindo objetos d constante 
delete produto.nome
delete produto['Marca do produto']
console.log(produto)


//Criando varios objetos dentro da constante
const carro = {
    modelo: 'Kia',
    valor: 32.000,
    proprietario: {
        nome: 'Lucas H',
        idade: 27,
        endereço: {
            rua: 'Baltazar antonio saraiva',
            numero: 598,
            complemento: 'Fundos'
        } 
    },

    condutores: [{
        nome: 'Sheila Sant"ana de souza alves',
        idade: 30,

    }, { 
        nome: 'Francico', 
        idade: '18'

    }], 
    calcularValorDeSegura: function ()  {
        // ... exemplo 
    }

}

carro.proprietario.endereço.numero = 1000
carro['proprietario']['endereço']['condutores'] = 'AV gigante'
console.log(carro)


delete carro.condutores
delete carro.proprietario.idade

console.log(carro) 
console.log(carro.condutores)


