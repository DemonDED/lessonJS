"use strict";

(function() {
	return function() {
    return function() {
      console.log('Hello IIFE!');
    };
  };
})()()();

(function(num1) {
	return function(num2) {
    console.log(num1 + num2);
  };
})(1)(2);

(function(num1) {
	return function(num2) {
    return function(num3) {
      console.log(num1 + num2 + num3);
    }
  }
})(1)(2)(3);

let count = (function() {
  let num = 1;
  return function() {
    if (num > 5) {
      num = 1;
    } else {
      console.log(num);
      num++;
    }
  }
})();

for (let i = 1; i < 13; i++) {
  count();
}