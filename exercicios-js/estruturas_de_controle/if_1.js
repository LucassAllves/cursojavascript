//Serve para trabalharmos com condicionais !!!

function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)          // Aprovado com 8.1
soBoaNoticia(9)            // Aprovado com 9
soBoaNoticia(6.2)          //Não caiu no if


function seForverdadeiroEuFalo(valor) {
    if(valor) {
        console.log('É verdadeiro... ' + valor)
    }
}

//todos que são verdadeirto ele imprimirá
seForverdadeiroEuFalo()
seForverdadeiroEuFalo(undefined)
seForverdadeiroEuFalo(null)
seForverdadeiroEuFalo(NaN)
seForverdadeiroEuFalo(0)
seForverdadeiroEuFalo('')                                   
seForverdadeiroEuFalo(' ')      //É verdadeiro...
seForverdadeiroEuFalo(-1)       //É verdadeiro... -1
seForverdadeiroEuFalo([])       //É verdadeiro... 
seForverdadeiroEuFalo([1, 2])   //É verdadeiro... 1,2
seForverdadeiroEuFalo({})       //É verdadeiro... [object Object]
