//var imagen = 'imagenes/1.jpg';

/*
var imagen = ['imagenes/1.jpg' ,'imagenes/2.jpg',
'imagenes/3.jpg', 'imagenes/4.jpg', 'imagenes/5.jpg',
'imagenes/6.jpg', 'imagenes/7.jpg', 'imagenes/8.jpg',
'imagenes/9.jpg', 'imagenes/10.jpg'];
*/

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

}


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
