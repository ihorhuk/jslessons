function calculateAverage() {
	let number1 = document.querySelector('#firstNumber').value;
	let number2 = document.querySelector('#secondNumber').value;
	let result = (parseFloat(number1) + parseFloat(number2))/2;
		   document.getElementById("resultPlace").innerHTML = result;
}

function calculatePower() {
	let number1 = document.querySelector('#firstNumber').value;
	let result = (parseFloat(number1))**3;
	document.getElementById("resultPlace").innerHTML = result;
}

function calculateAreaOfCircle() {
	let number1 = document.querySelector('#firstNumber').value;
	const PI = 3.1415;
	let result = PI * ((parseFloat(number1))**2);
	document.getElementById("resultPlace").innerHTML = result;
}

function calculateDollarToGrivni() {
	let dollar = document.querySelector('#firstNumber').value;
	let kurs = document.querySelector('#secondNumber').value;
	let result = parseFloat(dollar) * parseFloat(kurs);
    document.getElementById("resultPlace").innerHTML = result + " grn";
}

function calculateKmFromMilli() {
	let number1 = document.querySelector('#firstNumber').value;
	const KM_ON_MILLYA = 1.609;
	let result = KM_ON_MILLYA * (parseFloat(number1));
	document.getElementById("resultPlace").innerHTML = result + " km";
}
