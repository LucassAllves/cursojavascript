//Imprementar repetição de forma manual e de forma callback

const notas = [7.7, 8.1, 3.3, 4.4, 6.6, 8.8, 1.1, 9.9, 10.10,]

//sem callback
const notasBaixas1 = []
for (let i in notas){
    if (notas[i] < 7 ) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)


//com callback 
const notasBaixas2 = notas.filter(function(nota) {  //filter retorna verdadeiro ou falso
    return nota < 7
})
console.log(notasBaixas2)


const notasBaixas3 = notas.filter(notas => notas < 7)
console.log(notasBaixas3)


const notasMenorQue7 = nota => nota < 7         //guardamos o metodo dentro de NotasMenorQue7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)


