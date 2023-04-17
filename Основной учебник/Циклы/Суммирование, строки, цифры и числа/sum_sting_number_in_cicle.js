"use strict";

let sum = 0;

for (let i = 2; i <= 100; i++) {
  if (i % 2 == 0) {
    sum += i;
  }
}
console.log(`Сумма четных чисел от 2 до 100 - ${sum}`);

sum = 0;

for (let i = 1; i <= 99; i++) {
  if (i % 2 != 0) {
    sum += i;
  }
}
console.log(`Сумма нечетных чисел от 1 до 99 - ${sum}`);

sum = 0;

for (let i = 1; i <= 20; i++) {
  sum *= i;
}
console.log(`Произведение целых чисел от 1 до 20 - ${sum}`);

let arr = [2, 5, 9, 3, 1, 4];
let res = 0;
for (let elem of arr) {
  res += elem;
}
console.log(`Сумма элементов массива ${arr} - ${res}`);

res = 0;
for (let elem of arr) {
  if (elem % 2 == 0) {
    res += elem;
  }
}
console.log(`Сумма четных элементов массива ${arr} - ${res}`);

res = 0;
for (let elem of arr) {
  res += elem**2;
}
console.log(`Сумма квадратов элементов массива ${arr} - ${res}`);

res = 1;
for (let elem of arr) {
  res *= elem;
}
console.log(`Произведение элементов массива ${arr} - ${res}`);

let str = '';

for (let i = 0; i < 5; i++) {
  str += '-';
}
console.log(str);

str = '';

for (let i = 1; i <= 9; i++) {
  str += i;
}
console.log(str);

str = '';

for (let i = 9; i > 0; i--) {
  str += i;
}
console.log(str);

str = '-';

for (let i = 1; i <= 9; i++) {
  str += `${i}-`;
}
console.log(str);

for (let i = 10; i <= 1000; i++) {
  let strNum = String(i);

  console.log(strNum[0]);
}

for (let i = 10; i <= 1000; i++) {
  let strNum = String(i);
  let sum = Number(strNum[0]) + Number(strNum[1]);
  
  console.log(sum);
}

for (let i = 10; i <= 1000; i++) {
  let strNum = String(i);

  if (strNum[0] == 1) {
    console.log(i);
  }
}

for (let i = 10; i <= 1000; i++) {
  let strNum = String(i);
  let sum = Number(strNum[0]) + Number(strNum[1]);
  
  if (sum == 5) {
    console.log(i);
  }
}