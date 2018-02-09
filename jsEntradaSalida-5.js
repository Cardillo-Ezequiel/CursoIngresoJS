/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var nombre
	var edad
	nombre=document.getElementById('elNombre').value;
	edad=document.getElementById('laEdad').value;
	//concateno para que me deje escribir y luego aparezca
	alert("Usted se llama "+nombre+" tiene "+edad+" años ");
}

