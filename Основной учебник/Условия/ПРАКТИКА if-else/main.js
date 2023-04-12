"use strict";

let num1 = 1;
let num2 = 2;

if ((num1 + num2) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

num1 = '1';
num2 = '2';
let sum = +num1 + +num2;

if (sum === 3) {
	console.log('+++');
} else {
	console.log('---');
}

num1 = '1';
num2 = '2';

if (Number(num1) + Number(num2) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

let num = 123;
let first = String(num)[0];

if (Number(first) === 1) {
	console.log('+++');
} else {
	console.log('---');
}

num = 123;

if (Number(first) === 1) {
	console.log('+++');
} else {
	console.log('---');
}

num = 123;

if (String(num[0]) == 1) {
	console.log('+++');
} else {
	console.log('---');
}

num = 123;
first = String(num[0]);

if (first === 1) {
	console.log('+++');
} else {
	console.log('---');
}

num = 12;

if (String(num.length) === 2) {
	console.log('+++');
} else {
	console.log('---');
}

num = 12;
let str = Number(num);

if (str.length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

num = 12;

if (String(num).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

num = 12;

if (String(num).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

num = 12;

if (String(num).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

num = '123033'; // берем в кавычки, чтобы обращаться к цифрам

let sum1 = +num[0] + +num[1] + +num[2];
let sum2 = +num[3] + +num[4] + +num[5];

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}

let month = prompt('Введите число от 1 до 12');

if (Number(month)) {
  if (month >= 1 && month <= 2 || month == 12) {
    console.log('Зима');
  } else if (month >= 3 && month <= 5) {
    console.log('Весна');
  } else if (month >= 6 && month <= 8) {
    console.log('Лето');
  } else if (month >= 9 && month <= 11) {
    console.log('Осень');
  } else {
    console.log('Вы ввели число вне диапазона');
  }
} else {
  console.log('Вы ввели не число!');
}

let string = 'abdce';

if (string[0] == 'a') {
  console.log('Да');
} else {
  console.log('Нет');
}

let number1 = 12345;
let first1 = String(number1).length;

if (first1 == 1 || first1 == 2 || first1 == 3) {
  console.log('Да');
} else {
  console.log('Нет');
}

let number2 = 526;
let stringNumber = String(number2);
console.log(`Сумма цифр числа ${number2} - ${+stringNumber[0] + +stringNumber[1] + +stringNumber[2]}`);

let number3 = 586903;
let number3String = String(number3);
let sum1_1 = +number3String[0] + +number3String[1] + +number3String[2];
let sum2_2 = +number3String[3] + +number3String[4] + +number3String[5];

if (sum1_1 == sum2_2) {
  console.log('Да');
} else {
  console.log('Нет');
}