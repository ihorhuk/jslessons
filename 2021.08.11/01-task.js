//
// Task 1
//
//     Задание:
//     Напишите сценарий, который найдет минимальное, максимальное значения массива,
//     а также выведет сумму всех элементов массива.

let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];

let min = Number.MAX_VALUE;
let max = Number.MIN_VALUE;
let sum = 0;
for(let value of values) {
	sum += value;
	if(value > max) {
		max =value;
	}
	if(value < min) {
		min = value;
	}
}

console.log("Summa = " + sum);
console.log("Minimum = " + min);
console.log("Maximum = " + max);

