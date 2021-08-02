const [a] = [10]
console.log(a)//Ex. 10 atribuimos 10 ao array

const [n1, n2 , , n4, n5, n6 = 0] = [10, 7, 9, 8]//Estamos atribuido valores para cada objeto do array!
console.log(n1, n2, n4, n5, n6)//Ex. 10 7 8 undefined 0

const [, [ ,nota]] = [[,8, 8], [9, 6, 8]] //atribuimos o 2 array dentro do primeiro e pegamos apenas o ultimo array de nome, não usar esse método!
console.log(nota)//Ex.6