var CalcularMedia = new function() {
	this.totalNotas = 0;

	this.exibirEntradas = function() {
		this.totalNotas = parseInt(document.getElementById("totalNotas").value);
		var calculoDiv = document.getElementById("calculo");
		calculoDiv.style.display = "block";

		var elementoHtml = '';
		for (var i = 0; i < this.totalNotas; i++) {
			elementoHtml += '<input type="text" id="nota_' + i + '" value="" /><br />';
		}
		var entradasDiv = document.getElementById("entradas");
		entradasDiv.innerHTML = elementoHtml;
	};

	this.calcularMedia = function() {
		var total = 0;
		for (var i = 0; i < this.totalNotas; i++) {
			total += parseFloat(document.getElementById("nota_" + i).value);
		}
		var media = total / this.totalNotas;
		// alert("A média é: " + media);
		var resultadoDiv = document.getElementById("resultado");
		if (media >= 5) {
			resultadoDiv.innerHTML = "<h1 style='color:#008800'>" + media + "</h1>";
		} else {
			resultadoDiv.innerHTML = "<h1 style='color:#880000'>" + media + "</h1>";
		}
	};
};