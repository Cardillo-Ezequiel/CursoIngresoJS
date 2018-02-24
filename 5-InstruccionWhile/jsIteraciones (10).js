function Mostrar()
{

	var contador=0;
	var numero;
	var negativo=0;
	var positivo=0;
	var contadorPositivo=0;
	var contadorNegativo=0;
	var contadorCero=0;
	var numeroPar=0;
	var promedioNegativo=0;
	var promedioPositivo=0;
	var difPositivoNegativo;

	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		contador=contador+1;
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		if (numero<0) 
		{
			negativo=negativo+numero;
			contadorNegativo=contadorNegativo+1;

		}
		if(numero>0)
		{
			positivo=positivo+numero;
			contadorPositivo=contadorPositivo+1;
		}
		else
		{
			contadorCero=contadorCero+1;
		}
		if (numero%2==0) 
		{
			numeroPar=numeroPar+1;
		}
	respuesta=prompt("para salir, no");
	}

	promedioPositivo=positivo/contadorPositivo;
	promedioNegativo=negativo/contadorNegativo;

	difPositivoNegativo=positivo-negativo;


	document.write("1) Numeros positivos: "+positivo+"<br>"+"2) Numeros negativos: "
					+negativo+"<br>"+"3) Cantidad de numeros positivos:"+contadorPositivo+
					"<br>"+"4) Cantidad de numeros negativos: "+contadorNegativo+"<br>"+
					"5) Cantidad de ceros: "+contadorCero+"<br>"+"6) Cantidad de numeros pares: "+numeroPar
					+"<br>"+"7) Promedio de numeros positivos: "+promedioPositivo+"<br>"
					+"8) Promedio de numeros negativos: "+promedioNegativo+"<br>"+
					"9) Diferencia entre positivos y negativos: "+difPositivoNegativo);



}//FIN DE LA FUNCIÓN