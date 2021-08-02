//Maneiras de se escrever de forma literal:

const a = 1 
const b = 2
const c = 3

const objec1 = {a: 1 , b: 2, c: 3}
const object2 = {a, b, c}
console.log(objec1, object2)


const Attr = "nota"
const valorAttr = 7.87

const object3 = {}
object3[Attr] = valorAttr //aqui ele pegou o nota e o valorAttr
console.log(object3)

const objct4 = {[Attr]: valorAttr} //mais uma forma de escrever igual a anterior so que de maneira de diferente porém o resultado é mesmo.
console.log(object3)

const objt5 = {
    funcao1: function(){    ///as duas formas de escrever functiondentro do objecto
        //....
    },
    funcao2(){

    }
}
console.log(objt5)
