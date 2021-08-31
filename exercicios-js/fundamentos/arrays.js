
const valores = [7.7, 8.3, 6.3, 9.2]

console.log(valores[0], valores[3])

console.log(valores[4])



//adicionar elementos no array

valores[4] = 10

valores[5] = 15 

console.log(valores)

//ex:  [ 7.7, 8.3, 6.3, 9.2, 10, 15 ]



//conta os elementos  length = comprimento!

console.log(valores.length)

//ex: 6



//push = empurre, Pega todos os elementos do array. Porém não é bom misturar dados !

valores.push({id: 3}, false, null, 'teste')

console.log(valores)



//retira o ultimo array usando o pop

console.log(valores.pop())

delete valores[0] //serve para deletar também ! 

console.log(valores) //ex:[ <1 empty item>, 8.3, 6.3, 9.2, 10, 15, { id: 3 }, false, null ] object

console.log(typeof valores)