//Função em js é First-Class Object (Citizens)
//Higher - order Function 

//criar função de forma literal (colocando o function)
function fun1() {}


// Armazenar em uma variável 
const fun2 = function () {}







//Da para armazenar e chamar a função no array
const array = [function (a, b) {return a + b}, fun1, fun2]
// ai para chamar é só colocar o 
console.log(array[0](2, 2)) // o [0] para iniciar do indíce 0 




// Armazenar em um atributo de objeto 
const objec = {}
objec.falar = function () {return "Opá azedo"}
console.log(objec.falar())






// Passar função como parâmetro dentro do objeto kkk vamos lá !! 
function run(fun) {                 //é so abreviar que o java Scripit já identifica que vamos chamar uma função como parâmetro
    fun()
}
run(function () { console.log("Executando ....")}) //Chamamos um função dentro de outra !! toppp OBS munca esquecer do () para executar o parametro dentro do objeto





//um função pode retornar / conter uma função  ... 
function soma (a, b) {            //temos essa function e retornara dois valores 
    return function (c) {         // temos essa que retornará mais um valor 
        console.log(a + b + c)    // e aqui tem que acontecer a soma dos três valores 
    } 
}  
soma(2, 3)(4) //lembra que para chamar a function precida passar o (), pois é isso que estamos fazendo aqui !! 
// ou podemos guardar os primeiros valores dentro da variável e chamar o segundo método
const cincoMais = soma(2, 3)
cincoMais(4) // agora retornara o valor das primeiras guardadas dentro da primeira váriavel e retornará com o () a terceiro valor.

