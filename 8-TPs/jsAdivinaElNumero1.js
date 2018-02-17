/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 numeroSecreto=Math.floor((Math.random() * 100) + 1);
	 alert(numeroSecreto);
		//alert(numeroSecreto );
	contadorIntentos=0;

}

function verificar()
{
	numeroIngresado=parseInt(document.getElementById('numero').value);
	if (numeroSecreto==numeroIngresado&&contadorIntentos<1) {
		alert("Juega de vuelta");
		contadorIntentos=contadorIntentos+1;
	}
	 else {
	if (contadorIntentos<10) {
	
	if (numeroSecreto==numeroIngresado) 
		{
			alert("Usted es un ganador!!! y en solo "+contadorIntentos+ " intentos");

		} else 
			{
				if (numeroSecreto>numeroIngresado) 
				{
					alert("falta");
				}
				 else 
				{
			 		alert("se paso");
				}
			
			}
			contadorIntentos=contadorIntentos+1;
	document.getElementById('intentos').value=contadorIntentos;	
}
}

}