"use strict";

let date = {
  year: 2020,
  month: 10,
  day: 13
};
console.log(`${date['year']}-${date['month']}-${date['day']}`);

let obj = {
  '1a': 1,
  b2: 2,
  'с-с': 3,
  'd 4': 4,
  e5: 5
};

console.log(obj['1a']);
console.log(obj.b2);
console.log(obj['c-c']);
console.log(obj['d 4']);
console.log(obj.e5);