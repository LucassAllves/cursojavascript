//Temos uma condicional se não cair na primeira sera colocada uma segunda opção 

const imprimirResultado = function (nota) {
    if (nota > 7) {
        console.log('Aprovado !!')
    } else {
        console.log('Reprovado !!')
    }
}

imprimirResultado(10) //ex. Aprovado !!
imprimirResultado(7) //e. Reprovado !!
imprimirResultado('Epa !! ')// por ser um linguagem fracamente tipada gera um erro e cai no reprovado !! Reprovado !!