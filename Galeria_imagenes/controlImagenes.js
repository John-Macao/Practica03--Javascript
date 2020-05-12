
      //seleccionar imágenes
      var coche1 = document.getElementById("coche1");
      var coche2 = document.getElementById("coche2");

      //posiciones iniciales
      var x_coche1 = 0;
      var x_coche2 = 0;

      function correr() {
      	   //movimiento coche1
	   if (x_coche1 <= 85 && x_coche1 >= 0) { //condición para que se mueva entre estos valores de la pantalla
		x_coche1 = x_coche1 + 2; //movimiento del valor x
		coche1.style.left = x_coche1 + "%"; //aplicar el valor obtenido al left del elemento
	    }
	    else { //si no cumple la condición, es decir, se sale de los valores de la pantalla, vuelve a empezar
		 x_coche1=0; //posicion inicial
		 coche1.style.left = x_coche1 + "%"; //volvemos a aplicar el valor obtenido al left del elemento
	    }

	    //movimiento coche2
            if (x_coche2 <= 85 && x_coche2 >= 0) { //condición para que se mueva entre estos valores de la pantalla
		 x_coche2 = x_coche2 + 1; //movimiento del valor x
		 coche2.style.left = x_coche2 + "%"; //aplicar el valor obtenido al left del elemento
	    }
            else { //si no cumple la condición, es decir, se sale de los valores de la pantalla, vuelve a empezar
		 x_coche2=0; //posicion inicial
		 coche2.style.left = x_coche2 + "%"; //volvemos a aplicar el valor obtenido al left del elemento
	    }
      }








/*
var p = 0;
var ah = 5;
var av = 5;

limD = document.body.clientWidth -100;
limI = 0;

limSu = 0;
limIn = document.body.clientHeight -100;


function mueve() {

    var capa = document.getElementById('fotoSale');
    ph = parseInt(capa.style.left);
    pv = parseInt(capa.style.top);
    if(ph < limI){
        ah = 5;
    }
    if(ph > limD){
        ah = -5;
    }
    if(pv < limSu){
        av = 5;
    }
    if(pv > limIn){
        av = -5;
    }

    ph = ph + ah;
    capa.style.left = ph + "px";
    pv = pv + av;
    capa.style.top = pv + "px";

}

*/









