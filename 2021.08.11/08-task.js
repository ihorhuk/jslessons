// Task 8

// Задание:
// Дан массив целых чисел. Проверьте есть ли в нем одинаковые элементы. Если есть выведите их на экран.

let values = [10, 20, 4, 6, 11, 9, 125, 10, 8, 0, 3, 5, 89, 12, 46, 77, 3];

let duplicates = [];
let ind = 0;
for(let i = 0; i < values.length; i++) {
	for(let j = i + 1; j < values.length; j++) {
		if(values[i] == values[j]) {
			duplicates[ind++] = values[i];
		}
	}
}
console.log('Duplicates : ' + duplicates);