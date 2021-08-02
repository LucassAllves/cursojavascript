//Como corrigir erros ou expor ao usuário a mensagem de erro ou até mesmo tratar msg sucetivel a erros !! 


function tratarErroElancar(erro) {
    //throw new Error('...')
    //throw 10                                                //throw = Lançar //lançar o erro 
    //throw true
    throw {
        nome: erro.name,
        msg: erro.mensagem,
        data: new Date
    }

}

function imprimirNomeGritado(obj) {
    try {                                                   //try = tratar 
        console.log(obj.name.toUpperCase() + "!!!")
        
    } catch (e) {                                           //catch = pega //podemos lançar um erro com catch
        tratarErroElancar(e)
    
    } finally {                                              //finally = finalmente 
        console.log('final')
    }
}



const obj = {name: "Lucas H"}
imprimirNomeGritado(obj)
