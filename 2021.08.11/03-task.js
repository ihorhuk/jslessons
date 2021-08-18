// Task 3

// Задание:
// Напишите сценарий, который найдет в массиве все отрицательные значения и заменить их на значения 0.
// После этого выведет на экран все элементы массива.

let values = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];

for (let index = 0; index < values.length; index++) {
    if (values[index] < 0) {
        values[index] = 0;
    }
}

console.log("New array - " + values);