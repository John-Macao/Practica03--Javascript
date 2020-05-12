
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











