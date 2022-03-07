const { moduleExpression } = require("@babel/types");

let lista = [9, 2, 1, 4, 6]

function ordena(){
 return lista.sort((a, b) => a - b)
} 

function calcmediana(){
  ordena()
  let indice = lista.length / 2 + 0.5 - 1;
  mediana = lista[indice]
  return mediana
}


module.exports = {calcmediana}

//console.log(ordena())
//console.log(calcmediana())