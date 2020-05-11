//var imagen = 'imagenes/1.jpg';

/*
var imagen = ['imagenes/1.jpg' ,'imagenes/2.jpg',
'imagenes/3.jpg', 'imagenes/4.jpg', 'imagenes/5.jpg',
'imagenes/6.jpg', 'imagenes/7.jpg', 'imagenes/8.jpg',
'imagenes/9.jpg', 'imagenes/10.jpg'];
*/

/*
var aaIMG = [];
aaIMG[0] = 'imagenes/1.jpg';
aaIMG[1] = 'imagenes/2.jpg';
aaIMG[2] = 'imagenes/3.jpg';

var mm = 'imagenes/1.jpg';

var con = 0;

function antes(){
    document.getElementById('.aa').style.left=200 + "px";
    alert(document.getElementById("bb").style.left);
    //var capa = document.getElementById('');
    //document.getElementById(aaIMG[0]).style.left = 200 + "px";
    
    /*
    document.slider.src = aaIMG[con];

    if (con < 2) {
        document.getElementById(con);
        con++;
    }else{
        document.getElementById("adelante").disable=true;
    }
    */


    /*
}
*/


/*
function mover(galeria){
    galeria.addEventListener('click', e =>{
        let atras = galeria.querySelector('.atras'),
            adelante = galeria.querySelector('.adelante'),
            img = galeria.querySelectot('img'),
            tg = e.target;

        if (tg == atras ) {
            if (con > 0) {
                img.src = imagen[con - 1];
                con--;
            } else {
                img.src = imagen[imagen.length -1 ];
                con = imagen.length -1;
            }
            
        } else if (tg == adelante){
            if (con < imagen.length -1) {
                img.src = imagen[con + 1];
                con++;
            } else {
                img.src = imagen[0];
                con = 0;
            }
        }
    });

}

document.addEventListener("DOMContentLoaded", () => {
    let galeria = document.querySelector('.cuerpo');
    mover(galeria);
    alert();
});
*/




//array con código de todas las imágenes.
/*
misFotos=["<img src='imagenes/1.jpg' alt='1. India - Agra - El Taj Majal.' name='fotos0'>",
          "<img src='imagenes/2.jpg' alt='2. Albania - Region de Ballsh.' name='fotos1'>",
          "<img src='imagenes/3.jpg' alt='3. Atenas- Partenón.' name='fotos2'>",
          "<img src='imagenes/4.jpg' alt='4. Bélgica - Amberes.' name='fotos3'>",
          "<img src='imagenes/5.jpg' alt='5. Costa Rica - Parque nacional de la Amistad.' name='fotos4'>",
          "<img src='imagenes/6.jpg' alt='6. Egipto - Templo de Abu Simbel.' name='fotos5'>",
          "<img src='imagenes/7.jpg' alt='7. España - Albacete ciudad.' name='fotos6'>",
          "<img src='imagenes/8.jpg' alt='8. España - Tarragona - Acueducto romano.' name='fotos7'>"]
*/
misFotos=["<img src='imagenes/1.jpg'>",
          "<img src='imagenes/2.jpg'>" ,
          "<img src='imagenes/3.jpg'>" ,
          "<img src='imagenes/4.jpg'>" ,
          "<img src='imagenes/5.jpg'>" ,
          "<img src='imagenes/6.jpg'>" ,
          "<img src='imagenes/7.jpg'>",
          "<img src='imagenes/8.jpg'>" ];

var qq =muestra=0; //referencia a foto actual del array

window.onload = function() { 
pantalla=document.getElementById("visor"); //elemento pantalla para ver las fotos.
//titulo=document.getElementById("mititulo"); //elemento texto de pie de foto
foto=document.getElementById("fotoSale"); //elemento foto saliente
fotoAnt=document.getElementById("fotoEntra"); //elemento foto entrante
console.log(qq);
document.getElementById("botonretro").disabled=true;
}

function mueve(opcion) { //cambio de imagen
         anterior=misFotos[muestra]; //código foto saliente
         fotoAnt.innerHTML=anterior; //foto actual como foto saliente.

         switch (opcion) { //opciones para los distintos botones
            case "avance": //botón de avanza 1
            var aa = muestra++;
            console.log(aa);
            if (muestra>6) { 
                document.getElementById("botonAvanza").disabled=true;
            }else{
                document.getElementById("botonretro").disabled=false;
            }
            estilo="derecho";
         break;
         

         case "fin": //botón avanza hasta el final.
         muestra=7
         estilo="derecho";
         break;



         case "retro": //botón retrodede 1
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

         ver=misFotos[muestra]; //código de foto después de pulsar botón (foto nueva)
         mueveFoto = 400; //posición de foto nueva para estilo derecho
         mueveFoto2=-400; //posición de foto nueva para estilo izquierdo
         completado=setInterval(transicion,20); //iniciar transición
         }

function transicion() { //mover - transición de imagenes
         if (estilo=="derecho") {	//de derecha a izquierda 
            mueveFoto-=10; //mover foto nueva 10px hacia la izquierda en cada repetición
            mueveAnt=mueveFoto-400; //la foto vieja también se mueve.
            cambioFoto=mueveFoto+"px"; //añadimos "px" para poder usar estilo CSS
            cambioAnt=mueveAnt+"px";
            foto.style.left=cambioFoto; //Cambio de posición mediante estilo CSS
            fotoAnt.style.left=cambioAnt;
            foto.innerHTML=ver; //Visionamos la imagen nueva.
            if (mueveFoto<=0) { //al completar la transición debemos parar el movimiento
               parar() //función que para el movimiento.
               }
            }
         //Transición de izquierda a derecha. El proceso es similar al anterior
         else if (estilo=="izquierdo") {  		
            mueveFoto2+=10; //las fotos se mueven hacia la derecha 
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
function parar() { //parar el movimiento al finalizar la transición. 
         clearInterval(completado); //paramos el movimiento de imágenes
         numFoto="fotos"+muestra; //esta línea y las dos siguientes cambian el pie de foto.
         eltitulo=document.images[numFoto].alt;
         titulo.innerHTML = eltitulo;
         numff=muestra+1; //colocamos la nueva foto como fondo del visor.
         fotoFondo="foto"+numff+".jpg"
         imagenFondo="url("+fotoFondo+")";
         pantalla.style.backgroundImage=imagenFondo
         }






