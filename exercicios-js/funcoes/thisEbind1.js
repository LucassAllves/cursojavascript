//This = window quando associada a uma funcion. Quando chamada fora da function pade ter trÊs alterações que precisamos tomar cuidados
//criaremos class e dentro dela acessaremos o objeto através do this sem chamarmos a classe diretamente 
//This server para vc apontar para um objeto e tem que tomar cuidados com os variantes que impedem de encontra-la
//this quando usando com function ele aponta para variados lugares dependendo do contexto léxico(contexto ao qual a função foi escrita)
//Quando utilizado o arrow ele nunca varia porque vc amarra a this com a função arrow

const pessoa = {
    saudação: 'Bom dia',
    falar() {
        console.log(this.saudação)//Sudação esta dentro de pessoa, mesmo assim com o this conseguimos referêcia-lá
    }
}

pessoa.falar() //lembrando, quem chama é a função falar()
const falar = pessoa.falar //pegamos a função falar sem () e guardamos detnro da variavel, com o this diferente do contexto pessoa 
falar() //undefined porque deu conflito entre paradigmas: functions e 00

const falarDePessoa = pessoa.falar.bind(pessoa) //aqui deu certo porque não abrimos a () mas colocamos o bind(e aqui dentro colocamos o valor da function) tornando ela um function e passando o parâmetro desejado.
falarDePessoa() //bind serve para deixar o valor da função unico daquele método.