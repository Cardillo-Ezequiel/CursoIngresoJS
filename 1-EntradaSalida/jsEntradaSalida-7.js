/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
	var numero2;
	var sumar;

	numero1=parseInt(document.getElementById('numeroUno').value);
	numero2=parseInt(document.getElementById('numeroDos').value);
	sumar=numero1+numero2;

	alert("El resultado: "+sumar);

}

function restar()
{
	var numero1;
	var numero2;
	var restar;

	numero1=parseInt(document.getElementById('numeroUno').value);
	numero2=parseInt(document.getElementById('numeroDos').value);
	restar=numero1-numero2;

	alert("El resultado: "+restar);
}

function multiplicar()
{ 
	var numero1;
	var numero2;
	var multiplicar;

	numero1=parseInt(document.getElementById('numeroUno').value);
	numero2=parseInt(document.getElementById('numeroDos').value);
	multiplicar=numero1*numero2;

	alert("El resultado: "+multiplicar);
}

function dividir()
{
	var numero1;
	var numero2;
	var dividir;

	numero1=parseInt(document.getElementById('numeroUno').value);
	numero2=parseInt(document.getElementById('numeroDos').value);
	dividir=numero1/numero2;

	alert("El resulto: "+dividir);
	
}

