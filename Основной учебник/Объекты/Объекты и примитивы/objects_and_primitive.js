"use strict";

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = 'a';
console.log(arr2);

let arr3 = [1, 2, 3];
let arr4 = arr3;

arr3[0] = 'a';
arr4[0] = 'b';

console.log(arr4);