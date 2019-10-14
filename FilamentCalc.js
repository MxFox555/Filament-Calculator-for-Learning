function FilamentCalc() {
	var x = parseFloat(document.getElementById("input").value);
	switch (document.getElementById("filswitch").value) {
		case "PLA":
			document.getElementById("output").innerHTML = Math.round(x * 0.02295*10)/20;
			break;
		case "ABS":
			document.getElementById("output").innerHTML = Math.round(x * 0.0215*10)/20;
			break;
		case "PLA2":
			document.getElementById("output").innerHTML = Math.round(x * 0.02495*10)/20;
			break;
		case "PETG":
			document.getElementById("output").innerHTML = Math.round(x * 0.02995*10)/20;
			break;
    }
}