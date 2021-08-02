const escola = "Code3"


console.log(escola.charAt(4))// Serve para numerar a posição desejada do caracter da string

console.log(escola.charAt(6))


console.log(escola.charCodeAt(3))//ele pega a posição da sting porém com o valor da tabela unicode.  ex  o 3 = 101 na tabela unicode 

console.log(escola.indexOf('3'))// index of = indíce de,  Retorna a posição em numero da palavra ex: 4

console.log(escola.substring(1))// Recorta a string da palavra respeitando a posição escolhida  exemplo : ode3

console.log(escola.substring(0, 4))// aqui ele pega o indíce do zero até o dois e não conta o numero três exemplo: Cod

console.log("Escola ".concat(escola).concat('!!'.concat(' eu não vou ').concat('!!'))) // serve para concatenar ou conectar as strings ex:Escola Code3!! eu não vou !!

console.log('Escola ' + '!!' + " Eu não vou !!" + "Vai Seim !!")// concatena tbm ex: Escola !! Eu não vou !!Vai Seim !!

console.log(escola.replace(3, "e"))// substitua o 3 por e,  ex:Codee

console.log("Ana,Maria,Pedro".split(","))// coloca virgila e transforma em um array ex:[ 'Ana', 'Maria', 'Pedro' ]