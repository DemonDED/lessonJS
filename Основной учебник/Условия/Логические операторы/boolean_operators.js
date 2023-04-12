"use strict";

let num = 7;

if (num > 0 && num < 5) {
  console.log('+++');
} else {
  console.log('---');
}

num = 12;

if (num >= 10 && num <= 20) {
  console.log('+++');
} else {
  console.log('---');
}

let num1 = 2;
let num2 = -2;

if (num1 <= 1 && num2 >= 3) {
  console.log('+++');
} else {
  console.log('---');
}

num1 = -10;
num2 = -10;

if (num1 >= 0 || num2 >= 0) {
	console.log('+++');
} else {
	console.log('---');
}

num1 = 0;
num2 = 0;

if (num1 >= 0 || num2 >= 0) {
	console.log('+++');
} else {
	console.log('---');
}

num1 = 0;
num2 = 5;

if (num1 >= 0 || num2 >= 0) {
	console.log('+++');
} else {
	console.log('---');
}

num1 = 5;
num2 = 5;

if (num1 >= 0 || num2 >= 0) {
	console.log('+++');
} else {
	console.log('---');
}

num1 = -5;
num2 = 15;

if (num1 >= 0 || num2 >= 0) {
	console.log('+++');
} else {
	console.log('---');
}

num = 2;

if (num == 0 || num == 1 || num == 2) {
	console.log('+++');
} else {
	console.log('---');
}

if (num == 0 || num > 1 && num < 5 ) {
	console.log('+++');
} else {
	console.log('---');
}

num = 3;
		
if ((num > 5 && num < 10) || num == 20) {
	console.log('+++');
} else {
	console.log('---');
}
		
if (num > 5 || (num > 0 && num < 3)) {
	console.log('+++');
} else {
	console.log('---');
}

if (num == 9 || (num > 10 && num < 20) || (num > 20 && num < 30)) {
	console.log('+++');
} else {
	console.log('---');
}

if (!(num1 >= 0 || num2 <= 10)) { //инвертированно
	console.log('+++');
} else {
	console.log('---');
}

let test = true;

if (test === true) {
  console.log('+++');
} else {
  console.log('---');
}

if (test === false) {
  console.log('+++');
} else {
  console.log('---');
}