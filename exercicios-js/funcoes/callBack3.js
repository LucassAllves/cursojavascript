//Exemplo de callback dentro do Browser 
//é so colocar no console do browser para testar os clicks disparados !!!
//ducument para apontar o browser. gatElementsByTagName para setar o body do documentos
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!! ')
}

