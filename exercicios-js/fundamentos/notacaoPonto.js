// Anotação "." serve para dexar visivel a leitura de objetos e função instânciadas. 

console.log(typeof console)//Ex. object
console.log(Math.ceil(6.1))//Ex. opera o arredondamento para cima  "7"



const objct1 = {}
objct1.nome = "Bola 1"
//object['nome'] = "Bola2" esse é equivalente ao de cima so que com [] ao invés do ".".
console.log(objct1.nome)//Ex.Bola 1  o "." seviu para que objct1 lesse o nome 

function obj(nome){
    this.nome = nome //this serve para deixar visivel para criar ou instanciar outros objcto
    this.exec = function() {
        console.log("Exec...")//instansiamos uma function dentro do object e isso nos permite aproveitar esse valor na hora de intanciar 
    }    
}

    const obj2 = new obj("cadeira")
    const obj3 = new obj("Mesa")
    console.log(obj2.nome)// EX.cadeira
    console.log(obj3.nome)// Ex. Mesa
    obj3.exec()//Ex. Exec...
    //perceba que usando o "this" ele retorna o valor instânciado "público" e assim consiguimos intanciar em outros objectos passando outros valores!!!
