"use strict";

let arr = [1, 2, 87, 3, 5, 0, -2, 44];

for (let elem of arr) {
  if (elem === 0) {
    break;
  }

  console.log(elem);
}

let sum = 0;
for (let elem of arr) {
  if (elem < 0) {
    break;
  }
  
  sum += elem;
}
console.log(sum);

let position = 0;
for (let i = 0; i <= arr.length - 1; i++) {
  if (arr[i] === 3) {
    console.log(`Позиция числа 3 в массиве ${arr} - ${i + 1}`);
    break;
  }
}

sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;

  if (sum > 100) {
    console.log(i);
    break;
  }
}

let str = '';
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 3; j++) {
    str += i;
  }
}
console.log(str);

str = '';
for (let i = 10; i <= 30; i += 10) {
  let num = 0;
  num += i;
  for (let j = 1; j <= 3; j++) {
    num += 1;
    str += num;
    str += ' ';
  }
}
console.log(str);