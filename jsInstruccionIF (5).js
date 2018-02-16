function Mostrar()
{
	var edad;
	edad=parseInt(document.getElementById('edad').value);
//tomo la edad  
	if (edad<=12) {
	alert("NO sos adolescente");
	}
	if (edad>=18) {
	alert("NO sos adolescente");
	}
//otra manera de escribir el if de manera mas corta 
//	if (edad<=12 && edad>=18) {
//		alert("No sos adolescente");
//	}
}//FIN DE LA FUNCIÓN