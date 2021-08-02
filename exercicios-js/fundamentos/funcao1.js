// funcao é um trecho e código ou como se fosse uma receita(bloco de código nomeado) como o algoritimo ele recebe
//dados e outras que não retornam nada 

//Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3) //Ex.5
imprimirSoma(2)//Ex. NaN
imprimirSoma(2, 5 ,3 , 5 ,6 ,7) //Ex. Soma só os dois primeiros = 7
imprimirSoma() //Ex.NaN


//Funcao com retorno 
function soma(a, b = 0) {
    return a + b //quando retorna algo precisamos guardar dentro do console.log 
} 

console.log(soma(2, 3)) //Ex: 5
console.log(soma(2)) //como b = 0 ele retorna 2