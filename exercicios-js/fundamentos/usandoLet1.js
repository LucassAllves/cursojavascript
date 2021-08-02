//por mais que foi colocado var fora globalmente o let tem prioridade dentro do bloco
//

var numero = 1
{
    let numero = 2 
    console.log("dentro =", numero)//Ex. dentro = 2
}
console.log('fora =', numero)//Ex. fora = 1





var numero = 1
{
    let numero2 = 2 
    console.log("dentro =", numero2)//Ex. dentro = 2
}
console.log('fora =', numero)//Ex.fora = 1