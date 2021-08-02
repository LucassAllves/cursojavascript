//Convenções que não se deve ser utilizada constantemente
const sequencia = {
    _valor: 1, //convenção _ serve para mostrar a convenção para outros desenvolvedores
    get valor() {return this._valor++},
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }

}
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 100
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 200
console.log(sequencia.valor, sequencia.valor)
