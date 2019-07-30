
var palavra;
var separadorDeLetra;
var contador=0;

// FUNCAO QUE GERA AS DIVS BASEADO NA PALAVRA QUE SERÁ ADIVINHADA
function myFunction(){ 

    var palavra=document.getElementById("input").value;
    var separadorDeLetras = palavra.split('');
    document.getElementById("inicio").style.display="none";
    document.getElementById("container").style.display="flex";
    document.getElementById("second").style.display="flex";

    for (var c in separadorDeLetras) {

        var newElement = document.createElement('div');
        newElement.className = separadorDeLetras[c];
        newElement.id="car";
        newElement.innerHTML = separadorDeLetras[c];
        document.getElementById("main").appendChild(newElement);

    }
  // FIM

  // FUNCAO QUE MOSTRA A LETRA QUANDO O USUARIO ACERTA OU ERRA.
   document.getElementById("btn2").onclick=function(){

        var alface=document.getElementById("tentar").value;
        var coluna=document.getElementsByClassName(alface);

        for(var i=0, len=coluna.length; i<len; i++)
        {
            coluna[i].style["color"] = "white"; 

        }
        if(!separadorDeLetras.includes(alface)){

            contador++;
            if(contador==1){
                document.getElementById("cabeca").style.opacity=1;
                document.getElementById("erros").innerHTML=alface;
            }else if(contador==2){
                document.getElementById("tronco").style.opacity=1;
                document.getElementById("erros").innerHTML=document.getElementById("erros").innerHTML+'-'+alface;
            }else { 
                document.getElementById("pernas").style.opacity=1;
                alert('Você perdeu!A palavra era : '+palavra);
                document.getElementById("erros").innerHTML=document.getElementById("erros").innerHTML+'-'+alface;

            }
         }
    
    }
 }
  //FIM

  //FUNCAO QUE ATUALIZA (LIMPA) A PÁGINA
    function recomecar(){
    location.reload();
    }
