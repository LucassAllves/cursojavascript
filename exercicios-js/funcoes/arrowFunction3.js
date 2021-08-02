//This não varea quando esta dentro da arrow function 
let comparaComThis = function (param) {

    console.log(this === param)  //cuidados ao intanciar o this com global. 
   
}
comparaComThis(global)//essa função é global por isso temos que tomar cuidadi ao tentar manipular o this dessa forma.


const obj  = {}
comparaComThis = comparaComThis.bind(obj)//neste caso deu verdadeiro porque o bind instâciou o obj
comparaComThis(global)//agora deu falso porque o bind o tranformou em objeto 
comparaComThis(obj)// agora deu verdadeiro 

let comparaComThisArrow = param => console.log(this ===param)//deu verdadeiro porque orhis esta no contexto 
comparaComThisArrow(global)//esse é falso porque ele esta dentro do scopo do modulo 
comparaComThisArrow(module.exports) //aqui deu verdadeiro porque chamamos o modulo da função que esta o this

comparaComThisArrow = comparaComThisArrow.bind(obj)//estamos tentando mudar a referência do this usando o bind.
comparaComThisArrow(obj)//deu faldo porque o bind nao consegue competir com o arrow functions 
comparaComThisArrow(module.exports)//agora deu verdadeiro porque estamos apontando diretamente para o modulo




