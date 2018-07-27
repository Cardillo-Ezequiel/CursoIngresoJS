function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero;
	var respuesta="si";
	var negativo;
	var positivo;
	var contadorPositivo;
	var contadorNegativo;
	var cero;
	var contadorPar;
	var promedioP;
	var promedioN;
	var diferenciaNegativoYPositivo;

	diferenciaNegativoYPositivo=0;
	contadorPar=0;
	promedioNegativo=0;
	promedioPositivo=0;
	contadorNegativo=0;
	contadorPositivo=0;
	positivo=0;
	negativo=0;
	cero=0;


	while(respuesta!="no")
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		


		if (numero==0) 
			{
				cero++;
			} 
			else 
			{
				
						if (numero<0) 
					{
						negativo=negativo+numero;
						contadorNegativo++;
						
					} 
					else 
					{
						positivo=positivo+numero;
						contadorPositivo++;
					
					}
					
				
			}
			if (numero%2==0) 
			{
				contadorPar++;
			}





		respuesta=prompt("ingrese no para salir");
	}

	promedioPositivo=positivo/contadorPositivo;
	promedioNegativo=negativo/contadorNegativo;
	diferenciaNegativoYPositivo=positivo-negativo;

	document.write("La suma de los negativos es: "+negativo+"<br>"+"La suma de los positivos es: "+positivo+"<br>"+"La cantidad de numeros negativos es: "+contadorNegativo+"<br>"+"La cantidad de numeros positivos es: "+contadorPositivo+"<br>"+"La cantidad de ceros es: "+cero+"<br>"+"La cantidad de numeros pares es: "+contadorPar+"<br>"+"El promedio de los negativo es: "+promedioNegativo+"<br>"+"El promedio de los positivo es: "+promedioPositivo+"<br>"+"La diferencia entre negativos y positivos es: "+diferenciaNegativoYPositivo);
	
}//FIN DE LA FUNCIÓN