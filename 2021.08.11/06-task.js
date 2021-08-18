// Task 6

// Задание:
// Дано массив. Поменяйте элемент с максимальным значением местами с элементом с минимальным значением.

let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];

let min = Number.MAX_VALUE;
let minIndex = -1;
let max = Number.MIN_VALUE;
let maxIndex = -1;
console.log("Before array status - " + values);
for (let index = 0; index < values.length; index++) {
    if(values[index] > max) {
		max = values[index];
		maxIndex = index;
	}
	if(values[index] < min) {
		min = values[index];
		minIndex = index;
	}
}
if((minIndex >= 0) && (maxIndex >=0)) {
	values[minIndex] = max;
	values[maxIndex] = min;
}


console.log("After array status - " + values);