//Aqui veremos que quando adicionarmos uma fução dentro de "Var" ele não respeitara a solicitação de chamadas de posição()index!
const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()//Ex. 10 ou seja não trouxe o valor do índice que esperavamos e ira traze sempre 10 porque foi o ultimo valor atribuido para "i" !!!!
funcs[8]()//Ex. 10 com "var" não guarda em memória o valor de i sendo acrescentado !!! ao contrario de let.