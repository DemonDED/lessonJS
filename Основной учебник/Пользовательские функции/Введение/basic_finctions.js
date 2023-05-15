"use strict";

function myName() {
  let myName = prompt('Введите ваше имя');
  console.log(myName);
}
myName();

function sumNulltoHoundred() {
  let res = 0;
  for (let i = 1; i <= 100; i++) {
    res += i;
  }
  console.log(res);
}
sumNulltoHoundred();

function cubeNumber(num) {
  console.log(num ** 3);
}
cubeNumber(3);

function plusOrMinus(num) {
  if (num > 0) {
    console.log('+++');
  } else {
    console.log('---');
  }
}
plusOrMinus(2);
plusOrMinus(-2);

function threeNum(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}
threeNum(1, 2, 3);

let param1 = 1;
let param2 = 2;
let param3 = 3;
threeNum(param1, param2, param3);

function func(num = 5) {
	console.log(num * num);
}

func(2);
func(3);
func();

function func2(num1 = 0, num2 = 0) {
	console.log(num1 + num2);
}

func2(2, 3);
func2(3);
func2();