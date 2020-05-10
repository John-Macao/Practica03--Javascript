function datos(num){
    var anterior = document.getElementById("valores").value+=num;
}

function borrar_todo(){
    document.getElementById("valores").value="";
}

function calcular(){
    var resultado = eval(document.getElementById("valores").value);

    if(resultado=="Infinity"){
        document.getElementById("valores").value="No se puede dividir entre cero";
    }else{
        document.getElementById("valores").value=resultado;
    }
    
}

