"use strict";

let obj = {23: '1', 3: '2', 7: '11'};
console.log(obj);

let obj2 = {x: 1, y: 2, z: 3};
let massiveKeys = Object.keys(obj2);
console.log(massiveKeys);

let obj3 = {x: 1, y: 2, z: 3};
console.log(`Количество элементов в объекте 3 - ${Object.keys(obj3).length}`);

let obj4 = {x: 1, y: 2, z: 3};
let keyForObj4 = 'x';
console.log(obj4[keyForObj4]);

let obj5 = {x: 1, y: 2, z: 3};
console.log(obj5['x']); 

let obj6 = {x: 1, y: 2, z: 3};
let key = 'x';
console.log(obj6[key]);

let obj7 = {x: 1, y: 2, z: 3};

let prop = 'x';
console.log(obj7[prop]);

let obj8 = {x: 1, y: 2, z: 3};

let prop2 = 'x';
console.log(obj8[prop2]);

let key2 = 'x';

let obj9 = {
	[key2]: 1,
	y: 2,
	z: 3
};

let obj10 = {
	[key1]: 1,
	[key22]: 2,
	[key3]: 3
};

let key1 = 'x';
let key22 = 'y';
let key3 = 'z';