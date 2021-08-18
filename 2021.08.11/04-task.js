// Task 4
//
//     Задание:
//     Дано массив. Создайте на основе значений этого массива два новых массива.
//     В один массив поместите все четные значения, а во второй все нечетные.
//     Выведите на экран значения, которые вошли в первый массив и во второй массив.

let values = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];

let odds = [];
let oddsIndex = 0;
let notOdds = [];
let notOddsIndex = 0;

for(let element of values) {
	if(element % 2 == 0) {
		odds[oddsIndex++] = element;
	} else {
		notOdds[notOddsIndex++] = element;
	}
}

console.log("Odds array - " + odds);
console.log("Not odds array - " + notOdds);
