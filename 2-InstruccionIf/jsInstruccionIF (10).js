function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota=Math.floor(Math.random() * 10) + 1;
	if (nota>=9) 
		{
			alert("Exelente te sacaste un: "+nota);
		} 
		else 
		{
			if (nota>=4&&nota<=8) 
				{
					alert("Aprovaste con un: "+nota);
				} else 
				{
					alert("Vamos, la proxima se puede: "+nota);				
				}
		}

}//FIN DE LA FUNCIÓN