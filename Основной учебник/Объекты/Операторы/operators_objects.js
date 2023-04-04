"use strict";

let obj = {x: 1, y: 2, z: 3};

console.log('x' in obj);
console.log('w' in obj);

let obj2 = {x: 1, y: 2, z: 3};
delete obj2.x;

console.log('x' in obj2);