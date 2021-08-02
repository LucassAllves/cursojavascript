//Objeto é uma coleção de chave e valor 
const prod1 = {}
prod1.nome = "celular Ultra Mega"
prod1.preco = 4999.99
prod1["Desconto Legal"] = 0.40 // evitar nomes de variáveis com espaços 
console.log(prod1) //Ex: { nome: 'celular Ultra Mega', preco: 4999.99, 'Desconto Legal': 0.4 }


const prod2 = {
    nome: "Camisa Polo", 
    preco: 79.90
    
}
console.log(prod2) //Ex: { nome: 'Camisa Polo', preco: 79.9 }