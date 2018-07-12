function mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;

	if (edad<=12) 
		{
			alert("Eres un niño");
		} 
		else 
		{
			if (edad>=18) 
				{
					alert("Eres mayor");
				} else 
				{
					alert("Eres adolescente");
				}
		}


}//FIN DE LA FUNCIÓN