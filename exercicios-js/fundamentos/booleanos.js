let isAtivo = false
console.log(isAtivo)                        //ex: false

isAtivo = true 
console.log(isAtivo)                        //ex: true

isAtivo = 1
console.log(!isAtivo)                       //ex: false

isAtivo = 2 
console.log(!!isAtivo)                      // ex: true


console.log('Os verdadeiros .....')

console.log(!!3)                            // ex: true       

console.log(!! -1)                          // ex:true

console.log(!! ' ')                         // ex:true

console.log(!! "Texto")                     // ex:true

console.log(!![])                           // ex:true

console.log(!!{})                           // ex:true

console.log(!! Infinity)                    // ex:true

console.log(!!(isAtivo= true))              // aqui se verifica se está atribuindo// ex:true




console.log("Os falsos ...")

console.log(!!0)                            // ex: False

console.log(!!'')                           // ex: False

console.log(!!null)                         // ex: False

console.log(!!NaN)                          // ex: False

console.log(!!undefined)                    // ex: False

console.log(!!(isAtivo = false))            // ex: False

console.log(!!('' || null || 0 || " " ))    // || siginifica ou, serve para ler todos os dados até chegar em veradeiro! 



let nome = "Lucas !"
console.log(nome || 'Desconhecido')         // Ele pegou esperou o nome se nao tem nome ele escreve Desconhecido ex: nome ou Desconhecido
