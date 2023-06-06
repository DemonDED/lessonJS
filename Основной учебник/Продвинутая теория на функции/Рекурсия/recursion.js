"use strict";

let arr = [1, 2, 3, 4, 5];

function func1(arr) {
  console.log('Элемент массива -', arr.shift(), arr);

  if (arr.length != 0) {
    func1(arr);
  }

}

func1(arr);

arr = [1, 2, 3, 4, 5];

function func2(arr) {
  let sumCube = arr.shift() ** 2;

  if (arr.length != 0) {
    sumCube += func2(arr);
  }

  return sumCube;
}

console.log(func2(arr));

let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

function getPrimitiveOfObj(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'object') {
      getPrimitiveOfObj(obj[key]);
    }
    else {
      console.log(obj[key]);
    }
  }
}

getPrimitiveOfObj(obj);

arr =  [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
let newArr = [];

function getAOneDimensionalArray(arr) {

  for (let elem of arr) {
    if (typeof elem == 'object') {
      getAOneDimensionalArray(elem);
    } else {
      newArr.push(elem);
    }
  }

  return newArr;

}

console.log(getAOneDimensionalArray(arr));

obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

function getSumOfMoreDimensionalObject(obj) {
  let sum = 0;

  for (let key in obj) {
    if (typeof obj[key] == 'object') {
      sum += getSumOfMoreDimensionalObject(obj[key]);
    } else {
      sum += obj[key];
    }
  }
  return sum;
}

console.log(getSumOfMoreDimensionalObject(obj));

arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];

function func3(arr) {
  let string = '';

  for (let elem of arr) {
    if (typeof elem == 'object') {
      string += func3(elem);
    } else {
      string += elem;
    }
  }
  return string;
}

console.log(func3(arr));

arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];

function toCubeOfElemsInArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'object') {
      toCubeOfElemsInArr(arr[i]);
    } else {
      arr[i] = arr[i] ** 2;
    }
  }
  return arr;
}

console.log(toCubeOfElemsInArr(arr));