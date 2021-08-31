//Var fora do bloco de function não repita outro bloco 
// Sendo assim lida globalmente

var numero = 1
{
    var numero = 2
    console.log('Dentro =', numero)// Ex.Dentro = 2
}
console.log('fora =', numero ) //Ex. fora = 2

//ou seja muito cuidado com essa variavel global . pois ela subscreve !!!!