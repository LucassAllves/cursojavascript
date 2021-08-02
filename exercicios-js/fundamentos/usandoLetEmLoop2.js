const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()//Ex. 2 //Com o Let é guardado em memória todos os valores de "i++".
funcs[4]()//Ex. 4
funcs[0]()//Ex. 0