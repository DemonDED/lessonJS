"use strict";

let test = 10;

if (test == 10) {
  alert(test);
}

if (test > 0) console.log('+++'); else console.log('---');

if (test > 0) console.log('+++');

let day = prompt('Введите день месяца');

if (day >= 1 && day <= 10) {
  console.log('Первая декада');
} else if (day >= 11 && day <= 20 ) {
  console.log('Вторая декада');
} else if (day >= 21 && day <= 31) {
  console.log('Третья декада');
} else {
  console.log('error');
}

let num = prompt('Введите двухзначное число');

if (num >= 10 && num <= 99) {
  let result = +num[0] + +num[1];
  if (result <= 9) {
    console.log('Сумма цифр однозначна');
  } else {
    console.log('Сумма цифр двузначна');
  }
} else {
  console.log('Вы ввели неверное число');
}


let lang = 'ru';

switch (lang) {
  case 'ru':
    console.log('рус');
    break;
  case 'en':
    console.log('анг');
    break;
  case 'de':
    console.log('нем');
    break;
  default:
    console.log('язык не поддерживается');
    break;
}

num = 1;
let res;

let tet = num >= 0 ? res='1' : res='2';

// if (num >= 0) {
// res = '1';
// } else {
// res = '2';
// }

console.log(res);

let a = 2 * (3 - 1);
let b = 6 - 2; 

let result = a == b;

console.log(result);

a = 5 * (7 - 4);
b = 1 + 2 + 7;

result = a > b;
console.log(result);

a = 2 ** 4;
b = 4 ** 2;

result = a != b;
console.log(result);
