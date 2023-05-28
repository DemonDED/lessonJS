"use strict";

function test() {
  let num = 10;
  
  return function() {
    if (num < 1) {
      console.log('Отсчет окончен.');
    } else {
      console.log(num);
      num--;
    }
  }

}

let func1 = test();
let func2 = test();

for (let i = 1; i < 15; i++) {
  func1();
}

let result = (function() {
	return '!';
});
