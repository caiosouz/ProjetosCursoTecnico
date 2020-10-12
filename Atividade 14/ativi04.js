function MenorNumero() {

	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var c = document.getElementById("c").value;
	var m = document.getElementById("m").value;

	if (a <= b) {
		m = a
	} else {
		m = b
	}
	if (m >= c) {
		m = c
	}
	alert(m)

}