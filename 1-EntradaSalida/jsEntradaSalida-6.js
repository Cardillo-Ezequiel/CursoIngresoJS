/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	/*var numeroUno;
	var numeroDos;
	var suma;

	numeroUno=parseInt(document.getElementById('numeroUno').value);
	numeroDos=parseInt(document.getElementById('numeroDos').value);

	suma=numeroUno+numeroDos;
	alert("La suma es "+suma);*/

	var numeroUno;
	var numeroDos;
	var resultado;

	/*numeroUno="6";
	numeroDos=6;*/
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	
	resultado=numeroUno+numeroDos;
	
	alert(numeroUno+numeroDos);
}

