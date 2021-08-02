function Nome (nome) {
    this.nome = nome 

    this.falar = function () {
        console.log(`Meu nome é ${nome}`)
    }
}

const p1 = new Nome ('João')
p1.falar()