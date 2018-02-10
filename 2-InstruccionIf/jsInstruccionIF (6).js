function Mostrar()
{
	var edad;
//tomo la edad
edad=parseInt(document.getElementById('edad').value);

if (edad>=18) {
	alert("Sos mayor de edad");
}
if (edad>13&&edad<17) {
	alert("Sos adolescente");
}
if (edad<13) {
	alert("Sos un niño");
}



}//FIN DE LA FUNCIÓN