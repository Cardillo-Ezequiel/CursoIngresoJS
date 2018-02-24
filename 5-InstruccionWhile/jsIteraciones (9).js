function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var numero;
	var maximo;
	var minimo;

	while(respuesta!='no')
	{
		contador=contador+1;
		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		if (contador==1) {
			maximo=numero;
			minimo=numero;
		}else
		{
			if (numero>maximo) 
			{
				maximo=numero;
			}
			if(numero<minimo)
			{
				minimo=numero;
			}
		}
		respuesta=prompt("para salir, no");
	
	}
document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;



}//FIN DE LA FUNCIÓN