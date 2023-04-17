"use strict";

let arr = [];

for (let i = 1; i <= 10; i++) {
  arr.push(i);
}
console.log(arr);

arr = [];

for (let i = 1; i <= 10; i++) {
  arr.push('x');
}
console.log(arr);

arr = [1, 2, 3, -12, -22, 4, -44];
let newArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] > 0) {
    newArr.push(arr[i]);
  } else {
    continue;
  }
}
console.log(newArr);

for (let i = 0; i < arr.length; i++) {
  arr[i] **= 2;
}
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  arr[i] -= 1;
}
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  arr[i] += 10;
}
console.log(arr);

let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj1 = {};

for (let i = 0; i < arr1.length; i++) {
  obj1[arr1[i]] = arr2[i];
}
console.log(obj1);

let obj = {a: 1, b: 2, c: 3, d: 4, e: 5}; 
let newObj = {};

for (let key in obj) {
  if (obj[key] % 2 == 0) {
    newObj[key] = obj[key];
  } else {
    continue;
  }
}
console.log(newObj);

newObj = {};

for (let key in obj) {
  newObj[obj[key]] = key;
}
console.log(newObj);

let obj2 = {x: 1, y: 2, z: 3};

for (let key in obj2) {
  obj2[key] **= 2;
}
console.log(obj2);

for (let key in obj2) {
  obj2[key] += 1;
}
console.log(obj2);

arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;

for (let elem of arr) {
  if (elem == 'c') {
    flag = true;
    break;
  }
}

if (flag) {
  console.log('+++');
} else {
  console.log('---');
}

let testNumberString = prompt('Введите число');

arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter = 0;
let counterObj = {};

for (let elem of arr) {
  if (elem === 3) {
    counter++;
  }
}
for(let elem of arr) {
  if (elem === 2 || elem === 3) {
    if (counterObj[elem] == undefined) {
      counterObj[elem] = 1;
    } else {
      counterObj[elem]++;
    }
  }
}
console.log(`Количество элементов 3 в массиве ${arr} - ${counter}`);
console.log(`Количество элементов 3 и 2 в массиве ${arr}:`);
console.log(counterObj);

let string = 'oeiurgoawjfoiwang;eoaigheoainjghweo';
let stringObjCounter = {};

for (let i = 0; i < string.length; i++) {
  if (stringObjCounter[string[i]] == undefined) {
    stringObjCounter[string[i]] = 1;
  } else {
    stringObjCounter[string[i]]++;
  }
}
console.log(stringObjCounter);

arr = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < arr.length - 1; i++) {
  console.log(arr[i + 1]);
  console.log(arr[i + 1] + arr[i]);
}

for (let i = 2; i < arr.length; i++) {
  console.log(arr[i - 2], arr[i - 1]);
  console.log(arr[i - 2] + arr[i - 1] + arr[i]);
}