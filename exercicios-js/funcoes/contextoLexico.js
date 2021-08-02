
const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
   
}

exec() //era chama global porque a function "minhaFuncao" vai procurar dentro do contexto em que ela foi intânciada
// que no caso é la em const Valor = Global 