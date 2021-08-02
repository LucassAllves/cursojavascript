//Serve para fazermos comparações entre dois operadores 
let num1 = 1
let num2 = 2

num1++
console.log(num1)//Ex. 2

--num1
console.log(num1)//Ex. 1

console.log(++num1 === num2--)//isto da verdadeiro porque o numero só e subtraido depois da leitura no "num2"
console.log(num1 === num2)//Ex. false