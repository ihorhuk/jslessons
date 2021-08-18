// Task 7

// Задание:
// Дано массив. Найдите среднее арифметическое для значений этого массива.
// Выведите на экран только те элементы, которые больше этого среднего арифметического значения

let values = [10, 20, 48, 6, 11, 9, 125, 1, 8, 0, 3, 255, 77, 11, 170, 4, 28];

let biggerThanAverage = [];
let ind = 0;
let sum = 0;
let arraySize = values.length;
for(let element of values) {
	sum += element;
}
if(arraySize > 0) {
	let average = sum / arraySize;
	console.log('Average value is : ' + average);
	for(let element of values) {
	   if(element > average) {
			biggerThanAverage[ind++] = element;
	   }
    }
}
console.log('Bigger than average : ' + biggerThanAverage);


