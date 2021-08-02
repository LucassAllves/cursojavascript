//São function sem nomes!! simples assim.
const soma = function (x,  y ) {  
    return x + y   //aqui criamos uma function anônima que recebe o (return adição) com dois parâmetros.

}

const imprimirResultados = function (a, b, operacao = soma){
    console.log(operacao(a, b))//pegamos outra function anônima e chamamos a soma dela.
}

imprimirResultados(3, 4)//retornou o valor de numero 7
imprimirResultados(3, 4, soma)//tambem retornou 7 mesmo chamando a soma que é o parâmetro 
imprimirResultados(3, 4, function (x, y ) { //esse retornou -1
    return x - y
})
imprimirResultados(3, 4 , (x, y) => x * y) //retornou 12 pois passamosuma arrow function de multiplicação anônima!! 


const pessoa = {
    falar: function() {   //essa é uma function dentro do objeto pode ser feito apenas com "falar()"
        console.log('Opá')
    }
}

pessoa.falar()
