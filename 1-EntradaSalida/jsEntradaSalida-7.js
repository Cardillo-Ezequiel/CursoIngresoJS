/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var sumar;
	
	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);

	sumar=numeroUno+numeroDos;
	alert("El resultado es: "+sumar);


}

function restar()
{
	var numeroUno;
	var numeroDos;
	var restar;

	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);

	restar=numeroUno-numeroDos;
	alert("El resultado es: "+restar);
}

function multiplicar()
{
	var numeroUno;
	var numeroDos;
	var multiplicar;

	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);

	multiplicar=numeroUno*numeroDos;
	alert("El resultado es: "+multiplicar);

}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var dividir;

	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);

	dividir=numeroUno/numeroDos;
	alert("El resultado es: "+dividir);

	
}

/*function sumar()
{	
	var numeroUno;
	var numeroDos;
	var sumar;

	numeroUno=parseInt(document.getElementById('numeroUno').value);
	numeroDos=parseInt(document.getElementById('numeroDos').value);
	sumar=numeroUno+numeroDos;

	alert("El resultado: "+sumar);

}

function restar()
{
	var numeroUno;
	var numeroDos;
	var restar;

	numeroUno=parseInt(document.getElementById('numeroUno').value);
	numeroDos=parseInt(document.getElementById('numeroDos').value);
	restar=numeroUno-numeroDos;

	alert("El resultado: "+restar);
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var multiplicar;

	numeroUno=parseInt(document.getElementById('numeroUno').value);
	numeroDos=parseInt(document.getElementById('numeroDos').value);
	multiplicar=numeroUno*numeroDos;

	alert("El resultado: "+multiplicar);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var dividir;

	numeroUno=parseInt(document.getElementById('numeroUno').value);
	numeroDos=parseInt(document.getElementById('numeroDos').value);
	dividir=numeroUno/numeroDos;

	alert("El resulto: "+dividir);
	
}*/


