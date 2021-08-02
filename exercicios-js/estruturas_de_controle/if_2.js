//Expor a regra para não errar no if quando utiliar duas condicionais.
function teste1 (num) {
    if(num > 7)             //idependente se esta com quebra de linhas, em js s leitura é feita através do bloco posterior que no caso é "num"
    console.log(num)

    console.log('final')     //o final sempre sera impresso porque não esta associado ao if 
}
teste1(6)
teste1(8)

//ex. de como ficaria 
//final
//8
//final


//Segundo exemplo de o que não se pode fazer no "if"

function teste2(num){
    if(num > 7) {        //cuidado com o ';' não usar com estrutura de controle, porque 
        console.log(num)  //cuidado com o ';' não usar com estrutura de controle, porque 
    }
}

teste2(8) //no caso se colocado o ";" o js não enterpretará e imprimira os dois métodos
teste2(6)

//ex.       se tirar o ";"
                //8
//8
//6