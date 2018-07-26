function mostrar()
{

	var sexo = prompt("ingrese f para femenino ó m para masculino .");

	while(sexo!="f"&&sexo!="m")
	{
		sexo=prompt("ingrese f ó m ");


	}


	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN