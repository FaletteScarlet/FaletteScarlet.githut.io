const inputCedula = document.getElementById("cedula");
const formt = document.getElementById("formulario");
const write = document.getElementById("write");



inputCedula.addEventListener('input',function(){
	if (this.value.length > 11) 
    this.value = this.value.slice(0,11); 
})
formt.addEventListener("submit", e =>{
	e.preventDefault();
	if(inputCedula.value.length ==11) {
		let pharra = "";
		if (validar_cedula(inputCedula.value)){
			pharra += "<img src='img/val.png' width='50px' height='50px'><br>Cédula Válida.";
		}else {
			pharra += "<img src='img/inval.png' width='50px' height='50px'></br>Cédula Inválida.";
		}
		write.innerHTML = pharra;
	}else {
		alert ("La numeración ingresada no es correcta.");
	}
})



function validar_cedula(cedula){
	var sum = 0;
	for (var i = 0; i < 10; ++i) {
		var n = ((i + 1) % 2 != 0 ? 1 : 2) * parseInt(cedula.charAt(i));
		sum += (n <= 9 ? n : n % 10 + 1);
	}
	var dig = ((10 - sum % 10) % 10);

	return dig == parseInt(cedula.charAt(10));
}
