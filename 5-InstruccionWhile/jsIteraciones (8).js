function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	//var acumulador=0;
	var respuesta='si';


	while(respuesta!="no")
	{
		contador++;
		contador=contador+parseInt(prompt("ingrese un numero"));
		respuesta=prompt("presiona no para salir");
		if (contador<0) 
			{
				positivo=positivo+contador;
			} else 
			{
				negativo=negativo*contador;
			}

	}


	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN