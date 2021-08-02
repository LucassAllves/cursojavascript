//This = window quando associada a uma funcion. Quando chamada fora da function pade ter trÊs alterações que precisamos tomar cuidados
//criaremos class e dentro dela acessaremos o objeto através do this sem chamarmos a classe diretamente 
function Pessoa () {
    this.idade = 0   //esse é o parametro dentro de this 

   
    const self = this // tambem podemos usar o self aonde vamos gaurdar o this para burlar o sistema e intancias o this pelo self
   
    setInterval(function (){    //SetInterval serve realmente para chamarmos intervalos para repetições
   
        /*this*/self.idade++
   
        console.log(/*this*/self.idade)
   
    }/*.bind(this)*/, 1000)  //so com o time da NaN porque não tem () antes do 1000 como function, porque quem esá invicando a função é o Setinterval() agora vamos colocar o bind() para referenciar o this
}

new Pessoa
   


