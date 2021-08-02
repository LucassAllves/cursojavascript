//operadores aritméticos 
console.log('01)', '2' == 2)// 2 é igual a 2 resp. sim! porque não se leva em conta a string e sim o valor atribuido
console.log('02)', '2' === 2)// 2 é igual a 2 resp. Não! por "===" quer dixer extritamente iguais !

console.log('03)','3' != 3)     //3 é diferente de 3 resp. Não!
console.log('04)','3' !== 3)    //3 é diferente de 3 resp. Sim!
console.log('05)', 3 < 2)       // 3 é menor do que 2 resp. Não! 
console.log('06)', 3 > 2)       // 3 é maior que 2 resp. Sim!
console.log('07)', 3 <= 2)      // 3 é menor ou igual a 2 resp.Não!
console.log('08)', 3 >= 2)      // 3 é maior ou igual a 2 resp.Sim!


const d1 = new Date(0)
const d2 = new Date(0)


console.log('09)', d1 === d2)   //resp false
console.log('10)', d1 === d2)   //resp. false
console.log('11)', d1.getTime() === d2.getTime())//resp. verdade
console.log('12)', undefined == null)   //resp.verdade
console.log('13)', undefined=== null)// false

