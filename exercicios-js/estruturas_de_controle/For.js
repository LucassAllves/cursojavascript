//Tem determinadas repetições !!

let contador = 1
while (contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
} 
  //aqui vamos vazer o mesmo metodo usando o "for" 
for (let i = 1; i <= 10; i++) {
    console.log (`i = ${i}`)

}
  //vamos percorrer o array 
  const nota = [6.7, 7.4, 9.8, 8.1, 9.0, 7.7]
  for (let i = 0; i < nota.length; i++) {
      console.log(`nota = ${nota[i]}`)
  }