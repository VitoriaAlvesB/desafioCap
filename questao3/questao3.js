let s = "tenha um bom dia"
let text2 = ""

function espacoOff(){
 text2 = s.replace(/\s+/g, '');
  return text2
}

function gridArea(){
  espacoOff()
  let tamText = text2.length;
  let raiz = Math.sqrt(tamText);
  tamGrid = Math.ceil(raiz)
}