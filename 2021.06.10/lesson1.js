//Task 1
function calculateAverage() {
	let number1 = document.querySelector('#firstNumber').value;
	let number2 = document.querySelector('#secondNumber').value;
	let result = (parseFloat(number1) + parseFloat(number2))/2;
		   document.getElementById("resultPlace").innerHTML = result;
}

//Task 2
function calculatePower() {
	let number1 = document.querySelector('#firstNumber').value;
	let result = (parseFloat(number1))**3;
	document.getElementById("resultPlace").innerHTML = result;
}

//Task 3
function calculateAreaOfCircle() {
	let number1 = document.querySelector('#firstNumber').value;
	const PI = 3.1415;
	let result = PI * ((parseFloat(number1))**2);
	document.getElementById("resultPlace").innerHTML = result;
}

//Task 4
function calculateDollarToGrivni() {
	let dollar = document.querySelector('#firstNumber').value;
	let kurs = document.querySelector('#secondNumber').value;
	let result = parseFloat(dollar) * parseFloat(kurs);
    document.getElementById("resultPlace").innerHTML = result + " grn";
}

//Task 5
function calculateKmFromMilli() {
	let number1 = document.querySelector('#firstNumber').value;
	const KM_ON_MILLYA = 1.609;
	let result = KM_ON_MILLYA * (parseFloat(number1));
	document.getElementById("resultPlace").innerHTML = result + " km";
}

//Task 6
function calculateSummaMoney() {
	let nominalFirst = document.querySelector('#firstNumber').value;
	let quantityFirst = document.querySelector('#secondNumber').value;
	let nominalSecond = document.querySelector('#thirdNumber').value;
	let quantitySecond = document.querySelector('#fourthNumber').value;
	let nominalThird = document.querySelector('#fifthNumber').value;
	let quantityThird = document.querySelector('#sixthNumber').value;
	let result = parseFloat(nominalFirst) * parseFloat(quantityFirst) + parseFloat(nominalSecond) * parseFloat(quantitySecond) + parseFloat(nominalThird) * parseFloat(quantityThird);
    document.getElementById("resultPlace").innerHTML = result + " money";
}

//Task 7
function replaceInnerNumber() {
	let first = document.querySelector('#firstNumber').value;
	let second = document.querySelector('#secondNumber').value;
	let replaceSymbol = document.querySelector('#thirdNumber').value;
	
	let result = replace(first, 1, replaceSymbol) + " ; " + replace(second, 1, replaceSymbol);
    document.getElementById("resultPlace").innerHTML = result;
}

function replace(str, index, value) {
    return str.substr(0, index) + value + str.substr(index + value.length);
}

//Task 8
function calculateMixedTask8() {
	let numberr = document.querySelector('#firstNumber').value;
	let firstNumber = numberr.charAt(0);
	let secondNumber = numberr.charAt(1);
	let thirdNumber = numberr.charAt(2);
	let fourthNumber = numberr.charAt(3);
	
	let resultOfSum = parseInt(firstNumber) + parseInt(thirdNumber);
	let resultOfSubtract = parseInt(secondNumber) + parseInt(fourthNumber);
    document.getElementById("resultPlace").innerHTML = "Summ = " + resultOfSum + "; Substrat = " + resultOfSubtract;
}

//Task 9
function removeInternalSymbol() {
	let numberr = document.querySelector('#firstNumber').value;
	let firstNumber = numberr.charAt(0);
	let thirdNumber = numberr.charAt(2);
    document.getElementById("resultPlace").innerHTML = firstNumber + thirdNumber;
}

//Task 10
function reverseSymbols() {
	let numberr = document.querySelector('#firstNumber').value;
	let splitNumber = numberr.split("");
	let reverseArray = splitNumber.reverse();
	let result = reverseArray.join("");
    document.getElementById("resultPlace").innerHTML = result;
}
