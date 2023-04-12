"use strict";

let test = 7;

if (test > 10) {
  console.log('+++');
} else {
  console.log('---');
}

if (test < 10) {
  console.log('+++');
} else {
  console.log('---');
}

if (test >= 10) {
  console.log('+++');
} else {
  console.log('---');
}

if (test <= 10) {
  console.log('+++');
} else {
  console.log('---');
}

if (test == 10) {
  console.log('+++');
} else {
  console.log('---');
}

if (test != 10) {
  console.log('+++');
} else {
  console.log('---');
}

let test1 = 10;
let test2 = 2;

if (test1 > test2) {
  console.log('Переменная test1 больше test2');
} else {
  console.log('Переменная test1 меньше test2');
}

if (test1 == test2) {
  console.log('Переменные равны');
} else {
  console.log('Переменные не равны');
}

test1 = 'abc';
test2 = 'abc';

if (test1 == test2) {
  console.log('Переменные со строками равны');
} else {
  console.log('Переменные со строками не равны');
}

test1 = '123';
test2 = 123;

if (test1 == test2) {
  console.log('Переменные равны');
} else {
  console.log('Переменные не равны');
}

test1 = 3;
test2 = '3';
		
if (test1 === test2) {
	console.log('+++');
} else {
	console.log('---');
}

test1 = 3;
test2 = 2;
		
if (test1 !== test2) {
	console.log('+++');
} else {
	console.log('---');
}