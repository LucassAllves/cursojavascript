//destrutura  os valores da function e manipula os valores 
function    rand([min = 0, max = 1000]) {
    if (min < max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))//passamos dois valores 
console.log(rand([992]))// passamos apenas o valor minimo 
console.log(rand([ , 10]))// passmas apenas o valor max
console.log(rand([]))//não passamos nenhum valor então recebera o valor max e min 
console.log(rand())//dara um erro por não estar dentro de [] array