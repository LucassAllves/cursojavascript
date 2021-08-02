class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`menu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa ('João')
p1.falar()


//Utilizando factory 
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}