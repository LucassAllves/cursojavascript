//usando no parÂmetro de uma função 
function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const object = {max: 50, min: 40 }
console.log(rand(object))//passamos a varíavel 
console.log(rand({max: 50, min: 40}))//passamos valores 
console.log(rand({ min: 955 }))//passamos so o valor de minímo 
console.log(rand({}))//não passamos valores "irá variar entre 0 e 1000"
console.log(rand())//da erro porque não da objecto.