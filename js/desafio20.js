var div = document.getElementById("resp");

function calcular_nota(){
    let numero1 = parseInt (document.getElementById("n1").value);
    let numero2 = parseInt (document.getElementById("n2").value);
    let numero3 = parseInt (document.getElementById("n3").value);
    let media =  parseInt (numero1+numero2+numero3)/3;
    text = "";

    if (media <=5.9){
        text = `Nota ${media} Aluno Reprovado!`
    }
    else{text = `Nota ${media} Aluno Aprovado!`}

   // switch(media){
      //  case "6":
            
       //     console.log("aprovado");
       //     break;
      
   // }
    div.innerHTML = text; 
}

