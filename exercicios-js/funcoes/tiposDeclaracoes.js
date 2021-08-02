//a formas que declaramo as fucntion 
//function declaration esse é tradicional
console.log(soma(3, 4)) //nesta primeira o aquivo e lido desda perimeira linha 

function soma(x, y) {
    return x + y
}

// function expression 
console.log(sub(3, 4)) //essa da erro porque esta sendo cahamada a function antes essa é a diferença delas  

const sub = function (x, y ) {
    return x - y
}

// named function expression 
const mult = function mult(x, y) {
    return x * y
}