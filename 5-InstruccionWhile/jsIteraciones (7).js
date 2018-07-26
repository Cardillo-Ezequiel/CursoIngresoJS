function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta!="no")
	{	
		contador++;
		acumulador=acumulador+parseInt(prompt("ingrese un numero"));
		

		respuesta=prompt("presiona no para salir");
	}


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN