"use strict";

let min = prompt('Введите количество минут от 1 до 60');

if (min >= 0 && min <= 20) {
  console.log('Первая треть');
} else if (min >= 21 && min <= 40) {
  console.log('Вторая треть');
} else if (min >= 41 && min <= 60) {
  console.log('Третья треть');
} else {
  console.log('Не верно введены данные');
}

let arr = [2, 3, -2, 23, -10, 0];

if (arr.length == 3) {
  console.log(`Сумма элементов массива - ${arr[0] + arr[1] + arr[2]}`);
} else {
  console.log('Массив перегружен!');
}

let str1 = prompt('Введите любую строку');

if (str1[0] == 'a') {
  console.log('Строка начинается на "a"');
} else {
  console.log('Строка начинается на другой символ.');
}

let str2 = prompt('Введите любую строку');

if (str2[str2.length - 1] == 'x') {
  console.log('Строка заканчивается на "x"');
} else {
  console.log('Строка заканчивается на другой символ');
}

let str3 = prompt('Введите любую строку');

if (str3[0] == 'a' || str3[0] == 'b') {
  console.log(`Строка начинается на ${str3[0]}`);
} else {
  console.log('Строка начинается на другой символ');
}

let number = prompt('Введите число');
let last = number[number.length - 1];

if (Number(number)) {

  if (last == 0) {
    console.log('Последняя цифра числа равна нулю');
  } else {
    console.log('Число не заканчивается на 0');
  }
} else {
  console.log('Введено некорректное число');
}

if (Number(number)) {
  if (last == 0 || last == 2 || last == 4 || last == 6 || last == 8) {
    console.log('Число четное');
  } else {
    console.log('Число нечетное');
  }
}

let three = number % 3;

if (three == 0) {
  console.log('Число делится на 3');
}