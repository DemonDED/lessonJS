"use strict";

function func(...nums) {
	let sum = 0;
	
	for (let num of nums) {
		sum += num;
	}
	
	return sum;
}

let result = func(1, 2, 3);
console.log(result); // выведет 6

function mathpow(...rest) {
    let sum = 0;

    for (let num of rest) {
        sum += num;
    }
    return sum/rest.length;
}

console.log(mathpow(1, 2, 3, 4, 5));

// Функция, сливающая массивы в двухмерный

function unite(...arrs) {
	return arrs;
}

result = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(result); // выведет [ [1, 2, 3,] [4, 5, 6], [7, 8, 9] ]

// Функция, сливающая массивы в один

function merge(...arrs) {
	return [].concat(...arrs);
}

result = merge([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(result); // выведет [1, 2, 3, 4, 5, 6, 7, 8, 9]