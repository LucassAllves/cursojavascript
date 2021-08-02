//alterando objetos constantes / mantendo com o freeze

//Você pode alterar o nome ou valor do objeto porém não pode atribuir um novo objeto para a constante 
//Porque ela sempre irá apontar para o mesmo endereço do objeto inicial.

const pessoa = {nome: 'João'}
pessoa.nome = 'pedro'

console.log(pessoa)

//vamos tentar atribuir um novo objeto para a constante e ela irá dar uma erro
//pessoa = { nome: "Ana"}

 // vamos congerlar o objecto utilizando o freeze
 Object.freeze(pessoa)

 pessoa.nome = 'Maria'
 console.log(pessoa.nome)//permanaceu como Pedro porque utilizamos o freeze que congele o endereço do object, e nao permite deletar, mexer ou alterar


 const pessoaConstante = Object.freeze({ nome: 'Lucas'})
 pessoaConstante.mome = "Maria"
 console.log(pessoaConstante)