function MaiorNumero() {

	var x = document.getElementById("x").value;
	var y = document.getElementById("y").value;
	var z = document.getElementById("z").value;
	var m = document.getElementById("m").value;

	if (x >= y) {
		m = x
	} else {
		m = y
	}
	if (m <= z) {
		m = z
	}
	alert(m)
}