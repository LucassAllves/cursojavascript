//Par  Nome/Valor

const saldação = "Opá cachoeira !!!"//aqui estamos passando o contexto léxico 1, De forma global ! 

function exec() {

    const saldação = "Fala cachoeira"//No contexto 2 não temos conflitos poque o programa acaba lendo apenas o valor dentro da function que é um contexto diferente do 1. Caso ele não encontre o valor léxico, encontrará a global.

    return saldação

}

console.log(saldação)//Ex. Opá cachoeira !!!

console.log(exec(saldação))// Ex. Fala cachoeira



// Objetos são grupos alinhados de pares e valor.

const cliente = {

    nome: "pedro",

    idade:"27",

    peso:"90",

    endereço: {

        itaquaquecetuba:"Rua baltazar",

        numero:"598"

    }

}

console.log(cliente) //Ex. {

//    nome: 'pedro',

//    idade: '27',

//    peso: '90',

//    'endereço': { itaquaquecetuba: 'Rua baltazar', numero: '598' }

//  }