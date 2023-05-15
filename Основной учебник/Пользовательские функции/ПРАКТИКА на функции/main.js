"use strict";

function sumArrayElements(arr) {
  let res = 0;

  for (let elem of arr) {
    res += elem;
  }

  return res;
}

console.log(sumArrayElements([1, 2, 3, 4, 5]));
console.log(sumArrayElements([22, 35, -23, -1, 0]));

function getDevisorsNumber(num) {
  let arr = [];

  for (let i = 1; i <= 30; i++) {
    if (num % i == 0) {
      arr.push(i);
    }
  }

  return arr;
}

console.log(getDevisorsNumber(123));
console.log(getDevisorsNumber(5));
console.log(getDevisorsNumber(576287658975192865));

function getArrayOfString(str) {
  return str.split('');
}
console.log(getArrayOfString('sdfa4'));

function getReverseString(str) {
  return str.split('').reverse().join('');
}
console.log(getReverseString('a-b-c-d'));

function getStringFirstSumbolUpper(str) {
  str = str.slice(0, 1).toUpperCase() + str.slice(1);
  return str;
}
console.log(getStringFirstSumbolUpper('abcd'));

function getStringFirstSumbolUpperOnEveryWord(str) {
  let strArr = str.split(' ');
  console.log(strArr);
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].slice(0, 1).toUpperCase() + strArr[i].slice(1);
  }
  return strArr.join(' ');
}
console.log(getStringFirstSumbolUpperOnEveryWord('Hello world! and get code'));

function createArrayOfNumber(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(createArrayOfNumber(5));
console.log(createArrayOfNumber(25));

function gerRandomElementOfArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
console.log(gerRandomElementOfArray([1, 2, 3, 4, 5]));
console.log(gerRandomElementOfArray(['dasd', 2, 66, 'sss', 32]));

function checkNumberOnPrime(num) {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(checkNumberOnPrime(5));
console.log(checkNumberOnPrime(2));
console.log(checkNumberOnPrime(6));

function checkFriendlyOfNumbers(num1, num2) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 2; i <= num1; i++) {
    if (num1 % i == 0) {
      sum1 += i;
    }
  }
  console.log(sum1);
  for (let i = 2; i <= num2; i++) {
    if (num2 % i == 0) {
      sum2 += i;
    }
  }
  console.log(sum2)
  if (sum1 == num2 && sum2 == num1) {
    return true;
  }
  return false;
}

// console.log(checkFriendlyOfNumbers(20, 55));
console.log(checkFriendlyOfNumbers(220, 284));



console.log('Задачи на исправление ошибок!');



function func1() {
	return 3;
}
function func2() {
	return 5;
}

console.log( func1() + func2() );

function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
  return res;
}

console.log(sum([1, 2, 3, 4, 5]));

let arr = [1, 2, 3, 4, 5];

function func(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
  return res;	
}

console.log(func(arr));



function func1() {
	return 3;
}
function func2() {
	return 5;
}

console.log( func1() + func2() );

let sum2 = sum([1, 2, 3, 4, 5]);
console.log(sum2);

function sum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum;
}

let res = sum([1, 2, 3, 4, 5]);
console.log(res);

function sum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
  return sum;
}

function add(num) {
	if (num <= 9) {
		return '0' + num;
	} else {
    return num;
  }
}

console.log(add(2));
console.log(add(22));

arr = [1, 2, 3, 4, 5];
res = sum(arr);
console.log(res);

function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res;
}

let num = 12345;
res = getDigitsSum(num);
console.log(res);

function getDigitsSum(num) {
	let arr = String(num).split('');
	let sum = 0;
	
	for (let elem of arr) {
		sum += +elem;
	}
	
	return sum;
}

console.log(isPrime(13)); // должен вывести true
console.log(isPrime(12));

function isPrime(num) {
	for (let i = 2; i < num; i++) {
    let res = false;

		if (num % i != 0) {
			res = true;
		} else {
			return false;
		}
    return res;
	}
}