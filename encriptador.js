document.querySelector(".btnCopy").style.visibility="hidden";


function encrip(){


var text=document.querySelector("#textoencriptado").value;

var textEncriptado= text.replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");

         
     if(text.length>0){
     
          document.querySelector("#textoDesencriptado").value=textEncriptado;
          document.getElementById("textoencriptado").value = "";

          document.querySelector(".btnCopy").style.visibility="visible";
          document.getElementById("imagen1").style.display="none";
          document.getElementById("textoDesencriptado").style.visibility="visible";
          document.querySelector(".descrip1").style.display="none";
          document.querySelector(".descrip2").style.display="none";
                                   }
     else {
          Swal.fire({
               title: 'Espera!',
               text: 'Escribe algo y que sea en minusculas',
               icon: 'warning',
               confirmButtonText: 'ok'
             })                        
         
}

}
function desencrip(){

    
   var textoDes=document.querySelector("#textoencriptado").value;
   
   var textoDesencriptado= textoDes.replace(/enter/gi, "e")
                                   .replace(/imes/gi, "i")
                                   .replace(/ai/gi, "a")
                                   .replace(/ober/gi, "o")
                                   .replace(/ufat/gi, "u");

          if(textoDes.length>0){
               document.querySelector("#textoDesencriptado").value= textoDesencriptado;
               document.getElementById("textoencriptado").value = "";
               
              

          }
          else{
               Swal.fire({
                    title: 'Espera!',
                    text: 'Escribe algo y que sea en minusculas',
                    icon: 'warning',
                    confirmButtonText: 'ok'
                  })             
          }                        


   }
  
   function copiar(){

      
        var msm=textoDesencriptado.value;  
        if(msm.length>0){
        
        
        navigator.clipboard.writeText(msm);
        Swal.fire({
          title: 'Copiado!',
          text: 'Ahora pégalo donde escribiste en primer lugar, luego presiona el botón desencriptar',
          icon: 'success',
          confirmButtonText: 'ok'
        });}
        else{
          Swal.fire({
               title: 'No me toques!',
               text: 'No hay nada que copiar',
               icon: 'error',
               confirmButtonText: 'ok'
        });}

   }
   






var bot1=document.querySelector(".btn1");
bot1.onclick=encrip;


var copia=document.querySelector(".btnCopy");
copia.onclick=copiar;

var bot2=document.querySelector(".btn2");
bot2.onclick=desencrip;



