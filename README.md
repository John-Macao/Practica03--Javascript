## 1.	A partir de los siguientes problemas se pide implementar soluciones basadas en el lenguaje de programación de JavaScript usando funciones y eventos.


### Diseñar una interfaz en HTML que permita ingresar los siguientes campos en un formulario: cedula, nombres, apellidos, dirección, teléfono, fecha de nacimiento, correo electrónico y contraseña. Luego, usando funciones de JavaScript se pide validar que todos los campos han sido ingresados, además; que los valores ingresados en cada campo del formulario sean correctos teniendo en cuenta las siguientes condiciones:
![1](/imagenesReadMe/1.png?raw=true "Title")


### a. Se debe validar qué, en el campo de la cedula, se ingrese sólo números y que la misma sea correcta, en base, al último dígito verificador.
### Esta parte del código me permite verificar si la cedula es auténtica, devolviéndome al final un tru o un false.
![2](/imagenesReadMe/2.png?raw=true "Title")


### b. Se debe validar qué, en el campo del nombres, ingrese exclusivamente dos nombre y que permita ingresar sólo letras, por ejemplo: “Gabriel Alejandro”, es válido; “Gabriel”, no es válido.
### Esta parte del código me verifica que, en el campo de nombres, se ingresen los dos nombres correspondientes
![3](/imagenesReadMe/3.png?raw=true "Title")

### A su ves esta parte del código me permite verificar si lo que ingreso el usuario son solo letras y no números.
![4](/imagenesReadMe/4.png?raw=true "Title")

### c. Se debe validar qué, en el campo del apellidos, ingrese exclusivamente dos apellidos y que permita ingresar sólo letras, por ejemplo: “León Paredes”, es válido; “León”, no es válido.
### Así mismo esta parte del codigo me verifica si la entrada en el label están dos textos correspondientes a los dos apellidos.
![4](/imagenesReadMe/5.png?raw=true "Title")

### Y para ver si contiene solo letras utilizamos el mismo código que usamos para los nombres.
![4](/imagenesReadMe/6.png?raw=true "Title")

### d. Se debe validar qué, en el campo del teléfono, permita ingresar sólo números y un máximo de 10 caracteres numéricos.
### En esta parte se valida si el campo de teléfono tiene los 10 dígitos y su máximo de 10 números.
![4](/imagenesReadMe/7.png?raw=true "Title")

###  En esta parte por su lado me permite verificar que solo se ingresen números y no letras.
![4](/imagenesReadMe/8.png?raw=true "Title")

### e. Se debe validar que la fecha de nacimiento ingrese en el formato dd/mm/yyyy.
### En esta función me permite controlar que se ingrese el el label la fecha de nacimiento de acuerdo al formato solicitado.
![4](/imagenesReadMe/9.png?raw=true "Title")

### f. Se debe validar qué, en el campo correo electrónico, permita ingresar un correo válido. Se considera un correo válido, cuando comienza por tres o más valores alfanuméricos, luego un @, seguido por la extensión “ups.edu.ec” o “est.ups.edu.ec”.
### en esta parte del código me permite controlar las extensiones de “ups.edu.ec” y “est.ups.edu.ec” respectivamente y a su ves me controla que se ingrese al menos tres valores alfanuméricos.
![4](/imagenesReadMe/10.png?raw=true "Title")

### g. Se debe validar que la contraseña ingresada tenga mínimo 8 caracteres, además, debe incluir al menos: una letra mayúscula, una letra minúscula y un carácter especial (@, _, $)
### En esta función me permite controlar que los datos ingresados sean de al menos 8 caracteres y que, contengan por lo menos una mayúscula, una minúscula y un carácter especial.
![4](/imagenesReadMe/11.png?raw=true "Title")

### * Todas las validaciones antes descritas se deben realizar en tiempo real, es decir, a medida que el usuario escribe en el campo.
![4](/imagenesReadMe/12.png?raw=true "Title")

### * Si no cumple las validaciones, se mostrará un mensaje debajo de cada campo con el error y se pintara el campo con un borde rojo que representará que el campo tiene un error
![4](/imagenesReadMe/13.png?raw=true "Title")

### * Todos los campos de entrada dentro del formulario deben de ser de tipo “text”. Excepto el campo de tipo password.
### Podemos ver la diferencia entre la ”contraseña” y el “correo electrónico” con respecto al tipo de input que son.
![4](/imagenesReadMe/14.png?raw=true "Title")

### * Todos los campos deben ser ingresados de manera obligatoria y esto se verificará al momento de “enviar” (submit) la información del formulario hacia una página php. Si se cumple las validaciones, se enviará a una página php, en donde se mostrará únicamente un mensaje que diga “Bienvenido, pasaste las validaciones!”.
![4](/imagenesReadMe/15.png?raw=true "Title")
![4](/imagenesReadMe/16.png?raw=true "Title")

## 2. Diseñar una interfaz en html que tenga tres botones que diga “Anterior”, “Iniciar”, “Siguiente”, y una imagen. Luego, desde javascript se debe controlar para al hacer clic sobre uno de los botones realice una acción relacionada a una galería de imágenes (ver ejemplo, https://gihp4c.blog.ups.edu.ec/)
![4](/imagenesReadMe/17.png?raw=true "Title")

### Se debe tener, un arreglo con los nombres de diez imágenes, previamente descargadas y almacenadas en una carpeta llamada “images”.
### Como podemos observar, es este parte tenemos el arreglo de las imágenes. Guardados respectivamente en una carpeta llamada imagenes
![4](/imagenesReadMe/18.png?raw=true "Title")
![4](/imagenesReadMe/19.png?raw=true "Title")

### La galería de imágenes debe visualizar exclusivamente 5 imágenes.
### En esta función controla la opción dada en la interfaz, si es hacia la izquierda o hacia la derecha.
![4](/imagenesReadMe/20.png?raw=true "Title")

### Cada vez que se haga clic en el botón iniciar se deben escoger de manera aleatoria cinco imágenes de las diez que se mostrarán en la galería de imágenes.
### Al hacer clic en el botón siguiente o anterior se debe cambiar la imagen presentada en la galería.En esta parte de la función llamada movimientoFoto es donde se controla es estilo que se va a mover la foto.
![4](/imagenesReadMe/21.png?raw=true "Title")

###  El cambio de imágenes debe simular un efecto, para lo cuál, se debe usar las propiedades left o rigth.
### En esta parte controlo los saltos de las  imágenes aplicando la propiedad left.
![4](/imagenesReadMe/22.png?raw=true "Title")

### Al hacer clic en el botón siguiente y haber llegado a la última imagen disponible, el botón siguiente deberá ser deshabilitado (sólo cuando se ha llegado a la última imagen el botón siguiente deberá estar deshabilitado)
### Mediante este condicional controlo que cuando la última imagen se presente se desactive el botón de siguiente.
![4](/imagenesReadMe/23.png?raw=true "Title")

### Al hacer clic en el botón anterior y haber llegado a la primera imagen disponible, el botón anterior deberá ser deshabilitado (sólo cuando se ha llegado a la última imagen y cuando se inicie la galería de imágenes el botón anterior deberá estar deshabilitado)
### Mediante este otro condicional controlo que si llega a la primera imagen, el botón de anterior se desactive.
![4](/imagenesReadMe/24.png?raw=true "Title")

## 3. Realizar una calculara en HTML usando botones de javascript y una caja de texto para visualizar el resultado. Las operaciones que podrá hacer la calculadora son:: suma, resta, multiplicación y división. Además, se podrá limpiar la memoria de la calculadora. Por último, se debe usar la función eval() para realizar las operaciones aritméticas
### Diseño de la calculadora
![4](/imagenesReadMe/25.png?raw=true "Title")

### En esta parte asigno lo que son los botones y la entrada de texto para visualizar los numeros y la respuesta de las operaciones.
![4](/imagenesReadMe/26.png?raw=true "Title")

### Con estas 3 funciones controlo la entrada de los valores, el reseteo del input y los cálculos de las operaciones, con la ayuda de la función eval() 
![4](/imagenesReadMe/27.png?raw=true "Title")

### Probando el funcionamiento
![4](/imagenesReadMe/28.png?raw=true "Title")
![4](/imagenesReadMe/29.png?raw=true "Title")

### Conclusiones:
#### •	Aplicando los diferentes conocimientos adquiridos a lo largo del pedido del ciclo, puede generar paginas webs con un diseño y control mucho más eficaz que si solo se ocupara HTML5, la gran ayuda que nos brinda CSS y JavaScript sin duda nos facilita para dar una mayor experiencia a los usuarios, a su ves tener el control de las diferentes acciones que haga la página. 





