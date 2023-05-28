"use strict";

let num = 1;
		
function func1() {
	console.log(num);
}

func1();

num = 1;
		
function func2() {
	console.log(num);
}

num = 2;
func2();

function func3() {
	console.log(num);
}

num;

num = 1;
func3();

num = 2;
func3();

function func4(localNum) {
	localNum = 2;
}

num = 1;
func4(num);
console.log(num);

function func5(localNum) {
	num = 2;
}

num = 1;
func5(num);
console.log(num);

function func6(obj) {
	obj.a = '!';
}

let obj = {a: 1, b: 2, c: 3};
func6(obj);
console.log(obj);

function func7(arg) {
	arg = '!';
}

obj = {a: 1, b: 2, c: 3};
func7(obj.a);
console.log(obj);

function func8(obj) {
	obj = '!';
}

obj = {a: 1, b: 2, c: 3};
func8(obj.a);
console.log(obj);

function func9(arr) {
	arr.splice(1, 1);
}

let arr = [1, 2, 3];
func9(arr);
console.log(arr);

function func10(arr) {
	arr.slice(1, 1);
}

arr = [1, 2, 3];
func10(arr);
console.log(arr);

function func11(arr) {
	let newArr = arr2;
	newArr[0] = '!';
}

let arr2 = [1, 2, 3];
func11(arr2);
console.log(arr2);