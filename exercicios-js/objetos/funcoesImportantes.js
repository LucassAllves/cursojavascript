//Algumas funções importantes no Objects parecido com o freeze
const pessoa = {
    nome: "rebeca", 
    idade: 2, 
    peso: 13
}
console.log(Object.keys(pessoa))  //com o key podemos pegar um id do objectos Ex.[ 'nome', 'idade', 'peso' ]
console.log(Object.values(pessoa))// aqui pegamosos valores com o values [ 'rebeca', 2, 13 ]
console.log(Object.entries(pessoa))// aqui pegamos os array do objecto Ex. [ [ 'nome', 'rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ] um array dentro de outro array :)






Object.entries(pessoa).forEach(([chave, valor]) => { //  pegamos o array do objeto  pecorremos as chaves e o valor deles Ex. nome: rebeca  //idade: 2   // peso: 13
    console.log(`${chave}: ${valor}`)
}) 
    

//definido propriedades do objeto 
Object.defineProperty(pessoa, "DataNascimento", {
    enumerable: true,
    writable: false, 
    value: '01/01/2021'
})

pessoa.DataNascimento = '01/02/2017'//mesmo sobrescrevendo o valor continua value: "01/01/2021" ou seja nunca muda.
console.log(pessoa.DataNascimento)
console.log(Object.keys(pessoa))   // [ 'nome', 'idade', 'peso', 'DataNascimento' ]
                                                            

// Object.assing (ECMAScrip 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)





//console.log(Object.(pessoa))
//console.log(Object.(pessoa))



