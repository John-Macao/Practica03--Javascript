
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

foto=document.getElementById("fotoSale"); //elemento foto saliente
fotoAnt=document.getElementById("fotoEntra"); //elemento foto entrante

console.log(verConsola);
document.getElementById("botonretro").disabled=true;
document.getElementById("botonpara").disabled=true;
//document.getElementById("botoninicia").disabled=true;

var pararCambio=setInterval(cambio,8000)
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

    case "retro":
        document.getElementById("botonAvanza").disabled=false;
        var aa = muestra--;
        console.log(aa);
        if (muestra <= 0) {
            document.getElementById("botonretro").disabled=true;
        }
        estilo="izquierdo"
    break;

}

ver=misFotos[muestra]; 
mueveFoto = 400; 
mueveFoto2=-400; 
completado=setInterval(movimientoFoto,25);
}


function mueve2() {
    console.log("1");

   // clearInterval(completado) //parar temporizador de transición
   // clearInterval(pararCambio) //parar temporizador cambio de imagen
    pararC=setInterval(comprobar,8000) //iniciar temporizador cambio de imagen
    comprobar() //cambiar imagen.


    //mac = setInterval(comprobar,4000);
    //clearInterval(mac);
}

function comprobar(){
    
    anterior=misFotos[muestra]; 
fotoAnt.innerHTML=anterior;

estilo="iniciar";
ver=misFotos[muestra];
mueveFoto = 400;
mueveFoto2=-400;

completado=setInterval(movimientoFoto,50);

muestra=muestra+1;

if (muestra > 4) { //reiniciar tras llegar al final.
    muestra=0;	
    }
    
}



function movimientoFoto() { 
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

  else if (estilo == "iniciar") {
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
     
}

function parar() {
clearInterval(completado);
 //numff=muestra+1; //colocamos la nueva foto como fondo del visor.
 //fotoFondo="foto"+numff+".jpg"
 //imagenFondo="url("+fotoFondo+")";
 //pantalla.style.backgroundImage=imagenFondo
}

function parar2() {
    clearInterval(pararC);
    
    }
    







