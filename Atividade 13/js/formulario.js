function formulario(){
	
	var formulario = [
		document.getElementById("nome").value,
		document.getElementById("endereco").value,
		document.getElementById("email").value,
		document.getElementById("data").value,
		document.getElementById("telefone").value,
		document.getElementById("comentario").value
	];
	var texto = "";

	for (i = 0; i < formulario.length; i++){
		texto += formulario[i] + "<br />";
	}

	document.getElementById("result").innerHTML = texto;
}