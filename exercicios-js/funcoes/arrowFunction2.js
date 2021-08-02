//This não varea quando esta dentro da arrow function 
function Pessoa () {
    this.idade = 0   //esse é o parametro dentro de this 

   
    setInterval(() => {    //SetInterval serve realmente para chamarmos intervalos para repetições
   
        this.idade++
   
        console.log(this.idade)
   
    }, 1000) 
}

new Pessoa
   
//quando o this nao esta diretamente dentro da function ele faz a leitura literal ao contrario da arrow que pega o contexto que no casso é Pessoa!!
//ao invés de idade !!!  

