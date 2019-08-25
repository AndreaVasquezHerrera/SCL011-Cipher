/*Acá va tu código*/

function encode (mensajeInicial, clave) {
   let resultado ="";
   //corre cada letra 
   for (let i = 0; i < mensajeInicial.length; i++) {
     
    let ascii=(mensajeInicial.toUpperCase().charCodeAt(i)-65+clave)%26+65;//Para obtener la nueva posicion de la palabra en codigo Ascii
    
    let letra=String.fromCharCode(ascii);//fromCharCode:Es para obtener la letra que corresponde al codigo Ascii
    
    resultado=resultado+letra;
   }
    return resultado;
 }






//desencadena el evento
const botonCifrar=document.getElementById("bcifrar");
//llama al Dom
const mensajeFinal=function(){
    const mensaje1=document.getElementById("mensajePlano").value;
    const desplazamiento=parseInt(document.getElementById("offset").value);
    const output = encode(mensaje1,desplazamiento);
    document.getElementById("resultadoC").value=output;
}

botonCifrar.addEventListener("click",mensajeFinal);

function decode(mensajeInicial2,clave2){
   let resultado2="";
  //corre cada letra
   for (let x = 0; x < mensajeInicial2.length; x++) {
  
    let asciidecode=(mensajeInicial2.toUpperCase().charCodeAt(x)-90-clave2)%26+90;//Para obtener la nueva posicion de la palabra en codigo Ascii
   
    let letra2=String.fromCharCode(asciidecode);//fromCharCode:Es para obtener la letra que corresponde al codigo Ascii
    
    resultado2=resultado2+letra2;
   }
    return resultado2;
 }

//desencadena el evento
const botonDescifrar=document.getElementById("bdescifrar");
//llama al Dom
const mensajeFinalFinal=function(){
    const mensaje2=document.getElementById("mensajePlano").value;
    const desplazamiento2=parseInt(document.getElementById("offset").value);
    const output2 = decode(mensaje2,desplazamiento2);
    document.getElementById("resultadoC").value=output2;
}

botonDescifrar.addEventListener("click",mensajeFinalFinal)