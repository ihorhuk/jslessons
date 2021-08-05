//
// Задание:
// Запросите у пользователя число,
// посчитайте сумму всех числе между 0 и введенным значением и отобразите результат на экран.
let inputNumber = +prompt('Введите число', 0);
let taskMessage = 'Сумма всех целых чисел от 0 до ' + inputNumber;
let summa = 0;
while (inputNumber > 0) {
	summa += inputNumber--;
}
console.log(taskMessage + ' = ' + summa)
