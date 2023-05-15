"use strict";

function isEvenNumber(arr) {
  for (let elem of arr) {
    if (elem % 2 != 0) {
      return false;
    }
  }
  return true;
}

console.log(isEvenNumber([1, 2, 3, 4, 5]));
console.log(isEvenNumber([2, 4, 6, 8]));

function isEvenNumberOfInteger(num) {
  let arrNum = num.toString().split('');
  for (let elem of arrNum) {
    if (elem % 2 != 0) {
      return false;
    }
  }
  return true;
}

console.log(isEvenNumberOfInteger(2141113232141));
console.log(isEvenNumberOfInteger(2222222));

function doubleElementsOfArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(doubleElementsOfArray([2, 2, 3, 4, 5]));
console.log(doubleElementsOfArray([1, 2, 3, 4, 5]));

function func(a, b) {
	return a == b;
}

function func(a, b) {
	return a != b;
}

function func(a, b) {
	return a + b >= 10;
}

function func(num) {
	return num >= 0;
}