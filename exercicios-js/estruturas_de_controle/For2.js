//for in= dentro irá recorrer pelos índice do array 
const notas = [6.7, 7.8, 8.9, 6.5, 4.3, 10.20]

for(let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 28,
    peso: 64
}
for(let atributo in pessoa) {
    console.log(`${atributo } = ${pessoa[atributo]}`)
}
