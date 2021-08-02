// Serve para percorrer um bloco porém se não tiver o brack acaba executando todo case abaixo
// nao aceita 3.0 ou 3 > 0 nao aceita essas expleções !!!!
const imprirmirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case  9:
            console.log('Quadro de honra')
        break

        case  8: case 7: 
            console.log("aprovado")
        break 
        
        case  6:  case 5:  case 4: 
            console.log("Reprovado")
        break 


        case  3:  case 2:  case  1:
            console.log("Reprovadíssimo")
       // break 

        default:
            console.log('Nota inválida')
       // break

        

    }
}

imprirmirResultado(9)
imprirmirResultado(8)
imprirmirResultado(7)
imprirmirResultado(6)
imprirmirResultado(5)
imprirmirResultado(4)
imprirmirResultado(3)
imprirmirResultado(2)
imprirmirResultado(1)
imprirmirResultado(0)


//  Ex.Quadro de honra                                
//  aprovado
//  aprovado
//  Reprovado
//  Reprovado
//  Reprovado
//  Reprovadíssimo
//  Reprovadíssimo
//  Reprovadíssimo
//  Nota inválida


//Sem o break 
//Quadro de honra
//aprovado
//Reprovado
//aprovado
//Reprovado
//aprovado
//Reprovado
//Reprovado
//Reprovado
//Reprovado
//Reprovadíssimo
//Nota inválida
//Reprovadíssimo
//Nota inválida
//Reprovadíssimo
//Nota inválida
//Nota inválida