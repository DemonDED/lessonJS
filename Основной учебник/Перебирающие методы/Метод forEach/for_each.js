"use strict";

let arr = [1, 2, 3, 4, 5, -6, -7, -8];
let sumCube = 0;
arr.forEach(elem => {
  sumCube += elem ** 2;
})
console.log(sumCube);

let newArrTask1 = arr.filter((elem) => {
  return elem > 0;
});

console.log(newArrTask1);

let newArrTask2 = arr.filter((elem) => {
  return elem < 0;
});

console.log(newArrTask2);

let newArrTask3 = arr.filter((elem) => {
  return elem > 0 && elem < 10;
});

console.log(newArrTask3);

let arrStr = ['asd', 'gdjh', 'Hello', 'World', 'What', 'Choose your'];

let newArrTask4 = arrStr.filter((elem) => {
  return elem.length > 5;
});

console.log(newArrTask4);

let newArrTask5 = arr.filter((elem, index) => {
  return elem * index < 30;
});

console.log(newArrTask5);

let arrMega = [1, 2, [3, 4], 5, [6, 7]];

let newArrTask6 = arrMega.filter((elem) => {
  return typeof elem != 'object';
});

console.log(newArrTask6);

let res = arr.every((elem) => {
  return elem > 0;
});
console.log(res);

let res2 = arr.every((elem, index) => {
  return elem * index < 30;
});
console.log(res2);

let res3 = arr.some((elem) => {
  return elem > 0;
});

console.log(res3);

let res4 = arr.some((elem, index) => {
  return elem * index > 30;
});

console.log(res4);