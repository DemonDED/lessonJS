"use strict";

let obj = {x: 1, y: 2, z: 3};
console.log(obj['x']); // или obj.x

let obj2 = {x: 1, y: 2, z: 3};
let key = 'x';

console.log(obj2[key]);

let obj3 = {x: 1, y: 2, z: 3};
let sum = obj.x + obj.y + obj.z;

console.log(sum);

let obj4 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj4).length);