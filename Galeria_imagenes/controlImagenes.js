
var misFotos=["<img src='imagenes/1.jpg'>",
          "<img src='imagenes/2.jpg'>" ,
          "<img src='imagenes/3.jpg'>" ,
          "<img src='imagenes/4.jpg'>" ,
          "<img src='imagenes/5.jpg'>" ,
          "<img src='imagenes/6.jpg'>" ,
          "<img src='imagenes/7.jpg'>",
          "<img src='imagenes/8.jpg'>",
          "<img src='imagenes/9.jpg'>",
          "<img src='imagenes/10.jpg'>" ];

var verConsola =muestra=0; 
nodo = 0;

window.onload = function() { 

//pantalla=document.getElementById("visor"); //elemento pantalla para ver las fotos.
//titulo=document.getElementById("mititulo"); //elemento texto de pie de foto

foto=document.getElementById("fotoSale"); //elemento foto saliente
fotoAnt=document.getElementById("fotoEntra"); //elemento foto entrante

console.log(verConsola);
document.getElementById("botonretro").disabled=true;
}

function mueve(opcion) {
         anterior=misFotos[muestra]; 
         fotoAnt.innerHTML=anterior;

         switch (opcion) { 
            case "avance":
            var aa = muestra++;
            console.log(aa);
            if (muestra>3) { 
                document.getElementById("botonAvanza").disabled=true;
            }else{
                document.getElementById("botonretro").disabled=false;
            }
            estilo="derecho";
         break;
         

         case "fin": //botón avanza hasta el final.
         muestra=4
         estilo="derecho";
         break;



         case "retro":
         document.getElementById("botonAvanza").disabled=false;
         var aa = muestra--;
         console.log(aa);
         if (muestra <= 0) {
             document.getElementById("botonretro").disabled=true;
            }
            estilo="izquierdo"
         break;



         case "prin": //retroceder al principio
         muestra=0
         estilo="izquierdo"
         break

         }

         ver=misFotos[muestra]; 
         mueveFoto = 400; 
         mueveFoto2=-400; 
         completado=setInterval(transicion,25);
         }

function transicion() { 
         if (estilo=="derecho") {
            mueveFoto-=10; 
            mueveAnt=mueveFoto-400; 
            cambioFoto=mueveFoto+"px"; 
            cambioAnt=mueveAnt+"px";
            foto.style.left=cambioFoto; 
            fotoAnt.style.left=cambioAnt;
            foto.innerHTML=ver; 
            if (mueveFoto<=0) { 
               parar() 
               }
            }
         
         else if (estilo=="izquierdo") {  		
            mueveFoto2+=10;
            mueveAnt=mueveFoto2+400;
            cambioFoto=mueveFoto2+"px";
            cambioAnt=mueveAnt+"px";
            foto.style.left=cambioFoto;
            fotoAnt.style.left=cambioAnt;
            foto.innerHTML=ver;
            if (mueveFoto2>=0) {
               parar()
               }
            }
         }
function parar() {
         clearInterval(completado);
         
        // numff=muestra+1; //colocamos la nueva foto como fondo del visor.
        // fotoFondo="foto"+numff+".jpg"
        // imagenFondo="url("+fotoFondo+")";
        // pantalla.style.backgroundImage=imagenFondo
         }






