//var serve para que possamos deixar uma variável global
//Porém preciamos tomar cuidado com as coisas que fazemos com ela 
//Poque quando mudamos o var, é mudado em todo o codigo 

{ 
    {
        {
            {
                {
                    var sera = "Sera ???"
                    console.log(sera) //Ex. Sera ???


                }
            }
        }

    }
} console.log(sera) //Ex. Sera ???

function teste() {
    var local = 123
    console.log(local) // Ex. 123 //está dentro fa function mesmo sendo var não irá ler fora dela 
}
teste()
console.log(local)//Ex.  local is not defined // porque tentamos imprimir fora da function o var 