//Do / while serve para fazer o while fora do contexto
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max,min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opcao escolhido foi ${opcao}`)
} while (opcao != -1)  // essa é a unica que permite a explesão depois do bloco!! 

