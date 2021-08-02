const num = [6.7, 7.4, 9.8, 9.0, 7.7]

for (x in num) {
    if(x == 5){
        break   //break  qunado identificar o 5 ira para o bloco 
    }
    console.log(`${x} = ${num[x]}`)
}

//o continue não para como o break mas sim continua a repetição executando mais uma vez o blobo mais proximo .
for (y in num) {
    if(y == 5) {
        continue
    }
    console.log(`${y} = ${num[y]}`)
}
console.log(num)


externo: for (a in num ) {
    for(b in num ){
        if(a == 2 && b == 3 ) break externo
        console.log(`Par = ${a},${b}`)
    } console.log('fim..')
}