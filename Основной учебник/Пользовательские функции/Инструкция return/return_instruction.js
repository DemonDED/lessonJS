"use strict";

function cube(num) {
  return Math.pow(num, 2);
}
let res = cube(3);
console.log(res);

function square(num) {
  return Math.sqrt(num);
}
res = square(3) + square(4);
console.log(res);

function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}
res = round(sqrt(2));
console.log(res);

function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
res = sum(sqrt(2), sqrt(3), sqrt(4));
console.log(res);

function round(num) {
	return num.toFixed(3);
}
res = round(sum(sqrt(2), sqrt(3), sqrt(4)));
console.log(res);

function func(num) {
	return num;
	
	let res = num ** 2;
	return res;
}

console.log( func(3) );

function func(num) {
	if (num <= 0) {
		return Math.abs(num);
	} else {
		return num ** 2;
	}
}

console.log( func(10) );
console.log( func(-5) );

function func(num) {
	if (num <= 0) {
		return Math.abs(num);
	}
	
	return num ** 2;
}

console.log( func(10) );
console.log( func(-5) );

function func(num) {
	let sum = 0;
	
	for (let i = 1; i <= num; i++) {
		sum += i;
	}
  return sum;
}

console.log( func(5) );

function task7(num) {
  let i = 1;
  while (true) {
    num = num / 2;
    if (num < 10) {
      return i;
    }
    i++;
  }
}
console.log(task7(20));
console.log(task7(23125125));
console.log(task7(0));

function func(num1, num2) {
	if (num1 > 0 && num2 > 0) {
		return num1 * num2;
	} else {
		return num1 - num2;
	}
}

console.log(func(3, 4));