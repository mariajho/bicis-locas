function validateForm(){
	/* Escribe tú código aquí */
	var nombre = document.getElementsById("name").value;
	var apellido = document.getElementsById("lastname").value;
	var email = document.getElementsById("input-email").value;
	var contraseña = document.getElementsById("input-password").value;
	var seleccion= document.getElementsByTagName("select").value;
}

nombre();

function nombre(){
	var nombre = document.getElementsById("name").value;
	

}





function mayusculaPrimera(string){
	return string.charAt(0).toUpperCase();
}
