"use strict";

let arr1 = [1, 2, 3];
arr1.push(4, 5, 6);
arr1.unshift(4, 5, 6);
console.log(arr1);

console.log(arr1.shift());
console.log(arr1.pop());

let arr2 = [1, 2, 3, 4, 5];
let arr2_1 = arr2.slice(0, 3);
console.log(arr2_1);
let arr2_2 = arr2.slice(3, 5);
console.log(arr2_2);

let arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 2);
console.log(arr3);

arr3 = [1, 2, 3, 4, 5];
arr3.splice(3, 0, 'a', 'b', 'c');
console.log(arr3);

arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 0, 'a', 'b');
arr3.splice(6, 0, 'c');
arr3.splice(8, 0, 'e');
console.log(arr3);

arr3 = [1, 2, 3, 4, 5];
console.log(arr3.indexOf(3));
console.log(arr3.includes(3));