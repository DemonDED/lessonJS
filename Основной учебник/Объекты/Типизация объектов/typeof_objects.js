"use strict";

console.log( typeof {x: 1, y: 2, z: 3} );

console.log( typeof {} );

let obj = {x: 1, y: 2, z: 3};
console.log( typeof obj );

let obj2 = {x: 1, y: 2, z: 3};
console.log( typeof obj2['x'] );

console.log( typeof {x: 1, y: 2, z: 3} );

console.log( typeof [1, 2, 3] );

let arr = [1, 2, 3];
console.log( typeof arr );

let arr2 = [1, 2, 3];
console.log( typeof arr2[0] );

let arr3 = ['1', '2', '3'];
console.log( typeof arr3[0] );

console.log( Array.isArray([1, 2, 3]) );

console.log( Array.isArray({x: 1, y: 2, z: 3}) );