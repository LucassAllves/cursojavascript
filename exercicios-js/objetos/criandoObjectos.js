// usando a notação literal.

const obj1 = {}
console.log(obj1)

//object em js 
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras(É quando vc controe o objecto) 
function Produto(nome, preco, desc) {
    this.nome = nome 
    this.getPrecoComDesconto = () =>  {
    return  preco * (1 - desc)
    }
}


const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Videogame', 2000, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())



//função factory (essa vc pode criar tamto de foroma literal como de forma construtora)
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return   (salarioBase / 30) * (30 - faltas)

        }
    }
} 

const f1 = criarFuncionario('joão', 7980, 4)
const f2 = criarFuncionario('Lucas ',4000, 3)
const f3 = criarFuncionario('sheila', 3000, 5)
const f4 = criarFuncionario('Denilsom ', 2500, 1)
console.log(f1.getSalario(), f2.getSalario(), f3.getSalario(), f4.getSalario())


//boject.create

const filha = Object.create(null)
filha.nome= 'Ane'
console.log(filha)

// um funcao famos que retorna objecto....
const fronJson = JSON.parse('{"info": "Sou um JSON"}')
console.log(fronJson.info)