// Serve para aprendermos que não são necessários os retornos de parâmetros !! 
function area(largura, altura) {
const area = largura * altura 
if(area > 20) {
    console.log(`Valor acima do esperado: ${area}m2.`)
}   else {
        return area 
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 4, 5, 6))//nesse apesar de termos mais de uma parâmetro apenas os dois primeiro será executado os demais serão iguinorados 
console.log(area(5, 2))
console.log(area(undefined))
console.log(area(3, 3))
console.log(area(1, 0)) 
console.log(area(0, 1))