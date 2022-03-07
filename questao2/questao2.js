let vetorN = [1, 5, 3, 4, 2]
let x = 2;

function pares(){

   for(i = 0; i <= vetorN.length;i++){
    if(vetorN[i] % vetorN[i+1] == x){
      return vetorN[i]
    }
   }
  //pegar o item de  vetorN dividir pelo proximo item e verificar se o resto da divisão é igual ao valor de x
  // se for igual formar um par e ir pra proxima comparação

}
