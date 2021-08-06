//prototype serve para pegarmos o atributo pai quando não está dentro de uma function.
//prototype tbm aponta para ele mesmo quando não encontra nenhum valor, trazendo um objecto vazio,

const ferrari = {
    modelo: 'f40',
    velMax:  340
}

const volvo = {
    modelo: 'v40',
    velMax: 280
}

console.log(ferrari.__proto__) //Ex. {}  retornou objeto vazio porque não encontro nenhum elemento pai acima dele.
console.log(ferrari.__proto__=== Object.prototype)//Trouxe true porque proto é igual a Object.prototype porque não há nada maior.
console.log(volvo.__proto__ === Object.prototype)//EX .true
console.log(Object.prototype.__proto__ )//Ex. null porque o object.prototype esta acima de __proto__
console.log(Object.prototype.__proto__ === null)//Ex. true


function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)//Ex. function function od dois são uma function
console.log(Object.prototype, MeuObjeto.prototype)//esses são objectos {} MeuObjeto {}


//serve para não ficar replicando o codigoe trabalhar com herançã de pai para filho.