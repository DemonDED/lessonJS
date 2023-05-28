"use strict";

function test(func1, func2, func3) {
  console.log(func1() + func2() + func3());
}

test(
  function() {return 1},
  function() {return 2},
  function() {return 3},
);

function test2(func1, func2, func3) {
  console.log(func1() + func2() + func3());
}

function get1_1() {return 1;}
function get2_2() {return 2;}
function get3_3() {return 3;}

let get1 = function() {return 1;};
let get2 = function() {return 2;};
let get3 = function() {return 3;};

test2(get1, get2, get3);


let func1 = function(num) {
  return num ** 3;
}

let func2 = function(num) {
  return num ** 2;
}
// Выведет 9:
// test3(function func(num) {
// 	return num ** 3;
// });

test3(func1, func2);

function test3(func1, func2) {
	console.log(func1(3) + func2(2));
}

function test4(num, func1, func2) {
  console.log(func1(num) + func2(num));
}

test4(
  3,
  function(num) {return num ** 2;},
  function(num) {return num ** 3},
);

function cubeElementsOfArray(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = func(arr[i]);
  }
  return arr;
}

let cubeNumber = function(elem) {
  return elem ** 2;
}

console.log(cubeElementsOfArray([1, 2, 3, 4, 5], cubeNumber));

function func(num1, num2) {
  function square(num) {
    return num ** 2;
  }
  function cube(num) {
    return num ** 3;
  }

  return square(num1) + cube(num2);
}

console.log(func(2, 3));

function func4() {
  return function () {
    return 1;
  };
}

function func5() {
  return function () {
    return 2;
  };
}

console.log(func4()() + func5()());

function funcc() {
  return function() {
    return function() {
      return function() {
        return function() {
          return '!';
        };
      };
    };
  };
}
console.log(funcc()()()()());

function func6(num1) {
  return function(num2) {
    return function(num3) {
      return num1 + num2 + num3;
    };
  };
}

console.log(func6(1)(2)(3));

function func7(elem1) {
  return function(elem2) {
    return function(elem3) {
      return function(elem4) {
        return function() {
          let arr = [];
          arr.push(elem1, elem2, elem3, elem4);
          return arr;
        };
      };
    };
  };
}
console.log(func7(1)(2)(3)(4)());

function each(arr, callback) {
  let result = [];

  for(let elem of arr) {
    result.push(callback(elem));
  }

  return result;
}

let callback_task1 = function(elem) {
  return elem * 2;
}
let callback_task2 = function(elem) {
  return elem = elem.split('').reverse().join('');
}
let callback_task3 = function(elem) {
  return elem = elem.slice(0, 1).toUpperCase() + elem.slice(1);
}

let result1 = each([1, 2, 3, 4, 5], callback_task1);
let result2 = each(['abcd', 'Hello', 'Why', 'what'], callback_task2);
let result3 = each(['abcd', 'Hello', 'Why', 'what'], callback_task3);

console.log(result1);
console.log(result2);
console.log(result3);


//Задачи по упрощению кода
let result_1 = every([1, 2, 3, 4, 5], elem => elem > 0);

let result_2 = every([1, 2, 3, 4, 5], (elem, index) => elem * index > 10);

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result_3 = each(arr, (elem, index) => elem * index > 10);
