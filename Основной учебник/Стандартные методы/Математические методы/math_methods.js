"use strict";

console.log(Math.pow(2, 10));

console.log(Math.sqrt(245));

let arr1 = [4, 2, 5, 19, 13, 0, 10];
let result = 0;
for(let elem of arr1) {
  let cube = elem ** 3;
  result += cube;
}
console.log(Math.sqrt(result));

let qrts = Math.sqrt(379);
console.log(Math.round(qrts));
console.log(qrts.toFixed(2));
console.log(qrts.toFixed(1));

qrts = Math.sqrt(587);
let objMath = {};
objMath['floor'] = Math.floor(qrts);
objMath['ceil'] = Math.ceil(qrts);
console.log(objMath);

let arrMaxMin = [4, -2, 5, 19, -130, 0, 10];
console.log(`Минимальое число в массиве ${arrMaxMin} - ${Math.min.apply(null, arrMaxMin)}`);
console.log(`Максимальное число в массиве ${arrMaxMin} - ${Math.max.apply(null, arrMaxMin)}`);

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 100));

arrMaxMin = [];
for (let i = 0; i < 10; i++) {
  arrMaxMin.push(getRandomInt(1, 100));
}
console.log(arrMaxMin);