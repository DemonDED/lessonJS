"use strict";

let arr = ['abc', 'def', 'wqeqw', 'pfg'];

let newArr = arr.map((elem) => {
  return elem += '!';
});

console.log(newArr);

let newArrReverse = arr.map((elem) => {
  return elem = elem.split('').reverse().join('');
});

console.log(newArrReverse);

let arr2 = ['123', '456', '789'];

let newArr2 = arr2.map((elem) => {
  return elem = elem.split('');
});

console.log(newArr2);

let arrNum = [1, 2, 3, 4, 5];

let newArr3 = arrNum.map((elem, index) => {
  return elem * index;
});

console.log(newArr3);

arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result = arr.map((elem) => {
	return elem.map((num) => {
		return num * num;
	});
});

console.log(result);