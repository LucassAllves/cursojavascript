//Serve para retornar um evento de repetição, tipo quando eu chamar tal coisa ele retornará outra!! tipo assim ..

const fabricantes = ['Mercedes', 'Audi', 'Chevrolet', 'BMW', 'Kia']

function imprimir(nome, indice) {
    console.log(`${indice + 1} = ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach(function (a) {
    console.log(a)
})

fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})

fabricantes.forEach(fabricante => console.log(fabricante))
