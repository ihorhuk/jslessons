// Task 2

// Задание:
// Поменяйте сценарий таким образом, чтобы обход данных массива происходил с помощью цикла for...of

let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
let max = Number.MIN_VALUE;

for (let element of values) {
    if (element > max) {
        max = element;
    }
}

console.log("Максимальное значение массива - " + max);
