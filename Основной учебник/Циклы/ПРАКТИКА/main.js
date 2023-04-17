"use strict";

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }
// for (let i = 100; i > 0; i--) {
//   console.log(i);
// }
// for (let i = 1; i >= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

let arr = [];
for (let i = 1; i <= 10; i++) {
  arr.push('x');
}
console.log(arr);

arr = [];
for (let i = 1; i <= 10; i++) {
  arr.push(i);
}
console.log(arr);

for (let elem of arr) {
  if (elem > 0 && elem < 10) {
    console.log(elem);
  }
}

for (let elem of arr) {
  if (elem === 5) {
    console.log('Есть число 5');
    break;
  }
}

let res = 0;
for (let elem of arr) {
  res += elem;
}
console.log(res);

res = 0;
for (let elem of arr) {
  res += elem**2;
}
console.log(res);

res = 0;
let sum = 0;
for (let elem of arr) {
  sum += elem;
  res = sum / arr.length - 1;
}
console.log(res);

let factorialNumber = prompt('Введите число');
res = 1;
for (let i = 1; i <= factorialNumber; i++) {
  res *= i;
}
console.log(`Факториал числа ${factorialNumber} - ${res}`);

arr = [];
for (let i = 10; i > 0; i--) {
  arr.push(i);
}
console.log(arr);

arr = [-1, -2, -3, 2, 4, 5, -2, 6];
res = 0;
for (let elem of arr) {
  if (elem > 0) {
    res += elem;
  } else {
    continue;
  }
}
console.log(res);

arr = [10, 20, 30, 50, 235, 3000];
for (let elem of arr) {
	if (String(elem)[0] == 1 || String(elem)[0] == 2 || String(elem)[0] == 5) {
		console.log(elem);
	}
}

for (let i = arr.length - 1; i >= 0; i--) {
	console.log(arr[i]);
}

arr = [0, 1, 2, 3, 4, 11, 12, 13];
for (let i = 0; i < arr.length; i++) {
	if (arr[i] == i) {
		console.log(arr[i]);
	}
}

for (let elem of arr) {
	document.write(elem + '<br>');
	document.write(`<p>${elem}</p>`);
}

arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
for (let elem of arr) {
	if (elem == 'Суббота' || elem == 'Воскресенье') {
		document.write(`<b>${elem}</b>`);
	} else {
		document.write(elem);
	}
}


let objWork = {
employee1: 100,
employee2: 200,
employee3: 300,
employee4: 400,
employee5: 500,
employee6: 600,
employee7: 700,
}; 

for (let key in objWork) {
	if (objWork[key] <= 400) {
		let procent = objWork[key] * 0.1;
		objWork[key] += procent;
	}
}
console.log(objWork);

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let obj = {};

for (let i = 0; i < arr1.length; i++) {
	obj[arr1[i]] = arr2[i];
}
console.log(obj);

obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sum1 = 0;
let sum2 = 0;
for (let key in obj) {
	sum1 += key;
	sum2 += obj[key];
}
console.log(sum1/sum2);

obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
arr1 = [];
arr2 = [];
for (let key in obj) {
	arr1.push(key);
	arr2.push(obj[key]);
}
console.log(arr1, arr2);

obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
arr = [];
for (let key in obj) {
	if (String(obj[key])[0] == 1 || String(obj[key])[0] == 2) {
		arr.push(obj[key]);
	}
}
console.log(arr);

arr = ['a', 'b', 'c', 'd', 'e'];
obj = {};
for (let i = 0; i < arr.length; i++) {
	obj[i + 1] = arr[i];
}
console.log(obj);

arr = ['a', 'b', 'c', 'd', 'e'];
obj = {};
for (let i = 0; i < arr.length; i++) {
	obj[arr[i]] = i + 1;
}
console.log(obj);



console.log('Практика на поиск ошибок!');

for (let i = 0; i <= 10; i++) {
	console.log(i);
}

for (let i = 10; i >= 0; i--) {
	console.log(i);
}

for (let i = 10; i >= 0; i--) {
	console.log(i);
}

let i = 0;

while (i <= 10) {
	console.log(i);
	i++;
}

res = 0;

for (let i = 1; i <= 10; i++) {
	res += i;
}

console.log(res);

res = 1;

for (let i = 1; i <= 10; i++) {
	res *= i;
}

console.log(res);

arr = ['1', '2', '3', '4', '5'];
sum = 0;

for (let elem of arr) {
	sum += +elem;
}

console.log(sum); // должно вывести 15

arr = ['1', '2', '3', '4', '5'];
sum = 0;

for (let elem of arr) {
	sum += +elem;
}

console.log(sum); // должно вывести 15

arr = ['1', '2', '3', '4', '5'];
sum = 0;

for (let elem of arr) {
	sum += +elem;
}

console.log(sum); // должно вывести 15

arr = ['1', '2', '3', '4', '5'];
sum = 0;

for (let i = 0; i < arr.length; i++) {
	sum += +arr[i];
}

console.log(sum); // почему-то выводит NaN

arr = ['1', '2', '3', '4', '5'];
sum = 0;

for (let i = 0; i < arr.length; i++) {
	sum += +arr[i];
}

console.log(sum); // почему-то выводит не 15

arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
	arr[i] **= 2;
}

console.log(arr);

arr = [];

for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr);

obj = {a: 1, b: 2, c: 3};
sum = 0;

for (let key in obj) {
	sum += obj[key];
}

console.log(sum);

obj = {a: 1, b: 2, c: 3};
sum = 0;

for (let key in obj) {
	sum += obj[key];
}

console.log(sum);

arr = [1, 2, 3, 4, 5];
res = '';

for (let elem of arr) {
	if (elem === 3) {
		res = '+++';
    break;
	} else {
		res = '---';
	}
}

console.log(res);

arr = [];

for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr);

arr = [1, 2, 3, 4, 5];
res = false;

for (let elem of arr) {
	if (elem === 3) {
		res = true;
		break;
	}
}

console.log(res);

arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem % 2 == 0) {
		console.log(elem);
	}
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
res = [];

for (let elem of arr) {
	if (elem % 2 != 0) {
		res.push(elem);
	}
}

console.log(res);