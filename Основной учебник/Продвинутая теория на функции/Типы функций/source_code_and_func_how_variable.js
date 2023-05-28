"use strict";

function task1() {
  console.log('Hello Function!');
}
console.log(task1());
console.log(task1);

function func() {
  return 'Hello Function!';
}
console.log(func());
console.log(func);
func = 123;
console.log(func);

function func1() {
  return 3;
}
let func2 = func1;
console.log(func2() + func1());

let func3 = function() {
  return 1;
};
let func4 = function() {
  return 2;
};

console.log(func3() + func4());

function func5() {
	console.log('!');
}

let func6 = function() {
	console.log('!');
}

function task14() {
  console.log('Function Declaration');
}
task14();

let task15 = function() {
  console.log('Function Expression');
}
task15();

let arr1 = [
  function() {return 1},
  function() {return 2},
  function() {return 3},
]
console.log(arr1[2]());
console.log(arr1[0]() + arr1[1]() + arr1[2]());

for (let funcArr of arr1) {
  console.log(funcArr());
}

let objFunc = {
  func1: function() {return 1},
  func2: function() {return 2},
  func3: function() {return 3},
};
let res = 0;
for (let key in objFunc) {
  res += objFunc[key]();
}
console.log(res);

let arrayMath = {
  sumElementsOfArray: function(arr) {
    let res = 0;
    for (let elem of arr) {
      res += elem;
    }
    return res;
  },
  sumSquareElementsOfArray: function(arr) {
    let res = 0;
    for (let elem of arr) {
      res += elem ** 2;
    }
    return res;
  },
  sumCubeElementsOfArray: function(arr) {
    let res = 0;
    for (let elem of arr) {
      res += elem ** 3;
    }
    return res;
  },
}
console.log(arrayMath.sumElementsOfArray([1, 2, 3, 4, 5]));
console.log(arrayMath.sumSquareElementsOfArray([1, 2, 3, 4, 5]));
console.log(arrayMath.sumCubeElementsOfArray([1, 2, 3, 4, 5]));

function test(func1, func2) {
  console.log(func1());
  console.log(func2());
}

test(
  function() {return 1;},
  function() {return 2;} 
);

function test1(func1, func2, func3) {
  return func1() + func2() + func3();
}

test1(
  function() {return 1;},
  function() {return 2;},
  function() {return 3;},
);
