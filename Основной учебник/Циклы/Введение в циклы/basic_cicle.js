"use strict";

for (let i = 0; i <= 100; i++) {
  console.log(i);
}

for (let i = 11; i <= 13; i++) {
  console.log(i);
}

for (let i = 0; i <= 100; i++) {
  if ((i % 2) == 0) {
    console.log(i);
  }
}

for (let i = 0; i <= 99; i++) {
  if ((i % 2) != 0) {
    console.log(i);
  }
}

for (let i = 100; i >= 0; i--) {
  console.log(i);
}

let arr = ['a', 'b', 'c', 'd', 'e'];

for (let elem of arr) {
  console.log(elem);
}

let obj = {x: 1, y: 2, z: 3};

for (let key in obj) {
  console.log(key);
  console.log(obj[key]);
}

let j = 0;

while (j <= 100) {
  console.log(j);
  j++;
}

j = 11;

while (j <= 33) {
  console.log(j);
  j++;
}

let num = 25;
let iterations = 0;

while (num < 1000) {
  num *= 3;
  iterations++;
}
console.log(`Результат операции - ${num}, количество итераций - ${iterations}`);


arr = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

arr = ['a', 'b', 'c', 'd', 'e'];
		
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

arr = [2, 5, 9, 15, 1, 4];

for (let elem of arr) {
  if (elem > 3 && elem < 10) {
    console.log(elem);
  }
}

obj = {a: 1, b: 2, c: 3, d: 4, e: 5};

for (let key in obj) {
  if (obj[key] % 2 != 0) {
    console.log(obj[key]);
  }
}