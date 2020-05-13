
var ver , bienC=0, bienN=0, bienA=0, bienD=0, bienT=0, bienF=0, bienEmail=0,  bienP=0;

function confirmar(){
    if(bienC != 0 && bienN!=0 && bienA!=0 && bienD!=0 && bienT!=0 && f!=0 && co!=0 && p!=0){
        return ver=true;
    }
    else{
        return ver=false;
    }
}


function soloLetrasC(){
    var ced=document.getElementById("cedula").value;
    var cedlong=ced.length;
    verNumero(document.getElementById("cedula"));
    if (ced==""){
        document.getElementById("advCedula").innerHTML="Ingrese una cedula**";
        document.getElementById("advCedula").style.color="red";
        document.getElementById("cedula").style.borderColor="red";
        bienC=0;
    }
    
}


function verCedula(){
    var ced=document.getElementById("cedula").value;
    var cedlong=ced.length;
    var ultimo=ced.charAt(9);
    var mul=0;
    var cont=0;
    
        numced=0;
        for(i=0; i<cedlong-1; i++){
            numced=ced.charAt(i);
            if(i%2==0){
                mul = numced*2;
                if(mul >= 10){
                    mul=mul-9;
                }
            }
            else{
                mul=numced*1;
            }
            cont=cont+mul;
        }

        var cont2=cont/10;
        var decSup=Math.ceil(cont2)
        
        decSup=decSup*10;
        
        var resultado = decSup-cont;

        if(resultado != ultimo){
            document.getElementById("advCedula").innerHTML="Cedula no valida**";
            document.getElementById("advCedula").style.color="red";
            document.getElementById("cedula").style.borderColor="red";
            bienC=0;
        }
        else{
            document.getElementById("advCedula").innerHTML="";
            document.getElementById("cedula").style.borderColor="";
            bienC=1;
        }
    
}

function soloLetrasN(){
    soloLetras(document.getElementById("nombre"));
}

function verNombres(){
    var nombres=document.getElementById("nombre").value;
    var spNom=nombres.split(" ");
    var nom1=spNom[0];
    var nom2=spNom[1];
    if(nom1 != "" && nom2 != "" && spNom.length==2){
        document.getElementById("advNombres").innerHTML="";
        document.getElementById("nombre").style.borderColor="";
        bienN=1;
    }
    else{
        document.getElementById("advNombres").innerHTML="Ingrese dos nombres**";
        document.getElementById("advNombres").style.color="red";
        document.getElementById("nombre").style.borderColor="red";
        bienN=0;
    }
}


function soloLetras(dato){
    if(dato.value.length > 0){
        var verAscii = dato.value.charCodeAt(dato.value.length-1)
    if((verAscii >= 97 && verAscii <= 122) || (verAscii >= 65 && verAscii <= 90) || verAscii==32 ){
        return true
    }else {
        dato.value = dato.value.substring(0, dato.value.length-1)
        return false
    }
    }else{
        return true
    }
}


function soloLetrasA(){
    soloLetras(document.getElementById("apellido"));
}

function verApellidos(){
    var nombres=document.getElementById("apellido").value;
    var spNom=nombres.split(" ");
    var ape1=spNom[0];
    var ape2=spNom[1];
    if(ape1 != "" && ape2 != "" && spNom.length==2){
        document.getElementById("advApellido").innerHTML="";
        document.getElementById("apellido").style.borderColor="";
        bienA=1;
    }
    else{
        document.getElementById("advApellido").innerHTML="Ingrese dos apellidos**";
        document.getElementById("advApellido").style.color="red";
        document.getElementById("apellido").style.borderColor="red";
        bienA=0;
    }
}



function verDireccion(){
    var dir=document.getElementById("direccion").value;
    if(dir==""){
        document.getElementById("advDireccion").innerHTML="Ingrese una direccion**";
        document.getElementById("advDireccion").style.color="red";
        document.getElementById("direccion").style.borderColor="red";
        bienD=0;
    }
    else{
        document.getElementById("advDireccion").innerHTML="";
        document.getElementById("direccion").style.borderColor="";
        bienD=1;
    }
}



function verTelefono(){
    var telf=document.getElementById("telefono").value;
    var telfLong=telf.length;
    verNumero(document.getElementById("telefono"));
    if(telfLong > 10){
        document.getElementById("telefono").value=telf.slice(0,10);
    }
    tamañoTelefono()
}

function tamañoTelefono(){
    var telf=document.getElementById("telefono").value;
    var telfLong=telf.length;
    if(telfLong < 10){
        document.getElementById("telefono").style.borderColor="red";
        document.getElementById("advTelefono").innerHTML="Debe tener al menos 10 numeros**"
        document.getElementById("advTelefono").style.color="red";
        bienT=0;
    }
    else{
        document.getElementById("telefono").style.borderColor="";
        document.getElementById("advTelefono").innerHTML=""
        bienT=1;
    }
}


function verNumero(dato){
    if(dato.value.length > 0){
        var verAscii = dato.value.charCodeAt(dato.value.length-1)
    if(verAscii >= 48 && verAscii <= 57){
        return true
    }else {
        dato.value = dato.value.substring(0, dato.value.length-1)
        return false
    }
    }else{
        return true
    }
}


function verFecha(){
    var fecha=document.getElementById("Fecha").value;
    var sepFecha=fecha.split("/");
    var dia=sepFecha[0];
    var mes=sepFecha[1];
    var year=sepFecha[2];
    //console.log("fecha"+fecha.charAt(4));
    if(fecha.length > 1){
        if(fecha.slice(0,2) > 31 || fecha.slice(0,2) < 0 || fecha.slice(0,2)==="00" || fecha.charAt(1)==="/" ){
            document.getElementById("Fecha").value="";
            document.getElementById("Fecha").borderColor="red";
            document.getElementById("advFecha").innerHTML="Verifique el formato**";
            document.getElementById("advFecha").style.color="red";
            bienF=0;
        }
        else if(mes > 12 || mes < 0 || mes === "00" || fecha.charAt(4)==="/"){
            document.getElementById("Fecha").value=dia+"/";
            document.getElementById("Fecha").style.borderColor="red";
            document.getElementById("advFecha").innerHTML="Verifique el formato**";
            document.getElementById("advFecha").style.color="red";
            bienF=0;
        }
        /*else{
            document.getElementById("Fecha").borderColor="black";
            document.getElementById("msjFecha").innerHTML="";
        }*/
        if(fecha.length > 6){
            if(year > 2020 || (fecha.slice(6,10) < 1920 && fecha.slice(6,10).length==4)){
                document.getElementById("Fecha").value=dia+"/"+mes+"/";
                document.getElementById("Fecha").style.borderColor="red";
                document.getElementById("advFecha").innerHTML="Verifique el formato**";
                document.getElementById("advFecha").style.color="red";
                bienF=0;
            }
            else if(fecha.slice(6,fecha.length).length<4){
                document.getElementById("Fecha").style.borderColor="red";
                document.getElementById("advFecha").innerHTML="Verifique el formato**";
                document.getElementById("advFecha").style.color="red";
                bienF=0;
            }
            else{
                document.getElementById("Fecha").style.borderColor="";
                document.getElementById("advFecha").innerHTML="";
                bienF=1;
            }
        }
    }
    else{
        document.getElementById("Fecha").style.borderColor="red";
        document.getElementById("advFecha").innerHTML="Ingrese fecha de nacimiento**";
        document.getElementById("advFecha").style.color="red";
        bienF=0;
    }
}


function verCorreo(){
    var correo=document.getElementById("Correo").value;
    var corrLong=correo.length;
    if(correo == ""){
        document.getElementById("Correo").style.borderColor="red";
        document.getElementById("advCorreo").innerHTML="Ingrese un correo electronico**";
        document.getElementById("advCorreo").style.color="red";
        bienEmail=0;
    }
    else if(corrLong>3){
        var sepcorr=correo.split("@");
        var antes=sepcorr[0];
        var despues=sepcorr[1];
        if(antes != "" && antes.length>=3 && despues != ""){
                document.getElementById("Correo").style.borderColor="";
                document.getElementById("advCorreo").innerHTML="";
               if(despues != "ups.edu.ec" && despues != "est.ups.edu.ec"){
                    document.getElementById("Correo").style.borderColor="red";
                    document.getElementById("advCorreo").innerHTML="Extencion no válida**";
                    document.getElementById("advCorreo").style.color="red";
                    bienEmail=0;
                }
                else{
                    document.getElementById("Correo").style.borderColor="";
                    document.getElementById("advCorreo").innerHTML="";
                    bienEmail=1;
                } 
        }
        else{
            document.getElementById("Correo").style.borderColor="red";
            document.getElementById("advCorreo").innerHTML="Debe tener al menos tres valores alfanumericos**";
            document.getElementById("advCorreo").style.color="red";
            bienEmail=0;
        }
    }
}

function verContraseña(){
    var password=document.getElementById("password");
    var passLong=password.value.length;
    var mayus=0;
    var minus=0;
    var carEsp=0;
    var miAscii = 0;
    //console.log("entra passw");
    if(passLong>=8){
        document.getElementById("password").style.borderColor="black";
        document.getElementById("advPassword").innerHTML="";
        for(i=0;i<passLong;i++){
            miAscii= password.value.charCodeAt(i);
            if(miAscii >= 65 && miAscii<= 90){
                mayus=1;
            }
            if(miAscii>=97 && miAscii<=122){
                minus=1;
            }
            if(miAscii==36 || miAscii==95 || miAscii==64){
                carEsp=1;
            }
        }
        if(mayus==1 && minus==1 && carEsp==1){
            document.getElementById("password").style.borderColor="";
            document.getElementById("advPassword").innerHTML="";
            bienP=1;
        }
        else{
            document.getElementById("password").style.borderColor="red";
            document.getElementById("advPassword").innerHTML="Debe de conponerse de una mayúscula, una minúscula y un carácter especial (@, _, $)";
            document.getElementById("advPassword").style.color="red";
            bienP=0;
        }
    }
    else{
        document.getElementById("password").style.borderColor="red";
        document.getElementById("advPassword").innerHTML="Minimo de 8 caracteres";
        document.getElementById("advPassword").style.color="red";
        bienP=0;
    }
}









