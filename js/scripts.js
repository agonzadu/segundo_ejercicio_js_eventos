//Creamos una escucha para el evento Click del Botón
//var botonJs = document.getElementById("boton1");

/*
//Creación de escucha con función anónima
botonJs.addEventListener("click", function(){
	document.write("<h1>He hecho click sobre el botón</h1>")
	alert("Haz hecho click sobre el botón"+ "\n" + botonJs);
});
*/

/*
//Creación de escucha con función personalizada
botonJs.addEventListener("click", funClick);

function funClick(){
	document.write("<h1>He hecho click sobre el botón</h1>");
	alert("Haz hecho click sobre el botón"+ "\n" + botonJs);
};
*/

//Ejercicios de practica

//Practica 1

/*var mensaje = "Hola Mundo! \n Qué facil es incluir \'comillas simples'\ \n y \"comillas dobles\" ";
alert(mensaje);
*/

//Practica 2

/*var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	alert(meses);*/

//Practica 3

/*var valores = [true, 5, false, "hola", "adios", 2];

var mayor1 = valores[3] > valores[4];
var mayor2 = valores[4] > valores[3];
alert(mayor1);
alert(mayor2);

var valor1 = valores[0];
var valor2 = valores[2];
var resultado = valor1 || valor2;
var resultado2 = valor1 && valor2;
alert(resultado);
alert(resultado2);

var digUno = valores[1];
var digDos = valores[5];

var suma = digUno + digDos;
alert(suma);

var resta = digUno - digDos;
alert(resta);

var prod = digUno * digDos;
alert(prod);

var div = digUno / digDos;
alert(div);

var mod = digUno % digDos;
alert(mod);
*/

//Practica 4

/*var numero1 = 5;
var numero2 = 8;
 
if( numero1 <= numero2) {
  alert("numero1 no es mayor que numero2");
}
if(numero2 >= 0) {
  alert("numero2 es positivo");
}
if(numero1 < 0 || numero1 != 0) {
  alert("numero1 es negativo o distinto de cero");
}
if(++numero1 < numero2) {
  alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}*/

//Practica 5

/*var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numero = parseInt(prompt("Por favor indique su numero de DNI: "));
var letra = prompt ("Por favor indique su letra de DNI en mayusculas: ");

if (numero < 0 || numero > 99999999){
	alert("Número no valido");
}

else{
	var calculo = letras[numero % 23];
		if (calculo != letra){
			alert("La letra no coincide");
		}
		else{
			alert("La latra coincide");
		}
}
*/

