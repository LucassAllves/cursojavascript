// estratégias para lidar com expressões de valor padrão 
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c 
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) //caso nao retorne 0 ele pula para 1 ex. resultados => 3 5 6 3

//estratégia 2, 3, e 4  para gerar valor padrão 
function soma2(a, b, c) {
    
    // primeira estratégia:
    a = a !== undefined ? a : 1 // a é diferente de undefined se for paga a se nao : pega o 1
    
    
    //segunda estratégia:
    b = 1 in arguments ? b : 1 //dentro de arguments existe o valor 1 que no array da function soma() seria referência ao b. Se tiver pega b se não : pega 1   OBS tem que colocar o numero de acordo com indice (se fosse o c seria 2 pela sua posição)
    
    
    // terceira estratégia:
    c = isNaN(c) ? 1 : c      // isNaN(não é um número) se c não for um numero pegue 1 se não : pegue o c ...

    return a + b + c
} 



 console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0)) // results 3 5 6 0

 // quarta estratégia e mais usada da nova versão do es2015

function soma3 (a = 1, b = 1, c = 1) {
    return a + b + c 
} 
console.log(soma3(), soma3(3), soma3(3, 3, 3), soma3(0, 0, 0)) //essa é a forma mais enxuta de se usar ex. 3 5 9 0