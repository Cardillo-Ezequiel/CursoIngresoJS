function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	numeroUno=prompt("Ingrese numero");
	numeroDos=prompt("Ingrese numero");
	

	if (numeroUno==numeroDos) 
		{
			alert(numeroUno+numeroDos);
		} else 
		{
			numeroUno=parseInt(numeroUno);
			numeroDos=parseInt(numeroDos);
			
			if (numeroUno>numeroDos) 
				{
					resultado=numeroUno/numeroDos;
					alert(resultado);
				} else 
				{
					resultado=numeroDos+numeroUno;
					

				if (resultado<50) 
				{
					alert("la suma es "+resultado+" y es menor a 50");
				}
				else¨{
					alert(resultado)
				}
			}
				
		}
}
