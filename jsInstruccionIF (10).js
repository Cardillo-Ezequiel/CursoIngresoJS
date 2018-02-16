function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	
	nota=Math.floor(Math.random() * 10) + 1;

	if (nota>=9) {
		alert("Exelente " + nota);
	}
	if (nota<=4&&nota>=8) {
		alert("Aprobo " + nota);
	}
	if (nota<4) {
		alert("Vamos, la proxima se puede " + nota);
	}

}//FIN DE LA FUNCIÓN