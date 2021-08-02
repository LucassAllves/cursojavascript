//se usa a tabela de verdade do "I", "ou", "ou exclusivo", e da negação logica 
//v e v = v
//v e f = f
//f e f = f

//v ou ? = v
//f ou v = v
//f ou f = f

//ou exclusivo
//v xor v = f
//v xor f = v
//f xor v = v
//f xor f = f

//negação lógica 
//!v = f
//!f = v

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //ou = || 
    const comprarTv50 =  trabalho1 && trabalho2 //I = &&
    const comprarTv32 = trabalho1 != trabalho2  //!=  = ou exclusivo
    const manterSaudavel = !comprarSorvete  // operador unários

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel  }

}

console.log(compras(true,  true))
//Ex. {
//  comprarSorvete: true,
//  comprarTv50: true,
//  comprarTv32: false,
//  manterSaudavel: false
//}
console.log(compras(true,  false))
//{
//    comprarSorvete: true,
//    comprarTv50: false,
//    comprarTv32: true,
//    manterSaudavel: false
//}
console.log(compras(false, true))
//{
//    comprarSorvete: true,
//    comprarTv50: false,
//    comprarTv32: true,
//    manterSaudavel: false
//}
console.log(compras(false, false))
//{
//    comprarSorvete: false,
//    comprarTv50: false,
//    comprarTv32: false,
//    manterSaudavel: true
//}
  

