"use strict";

let str1 = 'js';
console.log(str1.toUpperCase());

let str2 = 'JS';
console.log(str2.toLowerCase());

let str3 = 'я учу javascript!';
console.log(str3.substr(2, 3));
console.log(str3.substr(6, 10));

console.log(str3.substring(2, 5));
console.log(str3.substring(6, 16));

console.log(str3.slice(2, 5));
console.log(str3.slice(6, 16));

let string1 = 'abcde';
console.log(string1.indexOf('c'));
if (string1.indexOf('a') != -1) {
  console.log(true);
}
if (string1.indexOf('a') == 0) {
  console.log(true);
}
if (string1.lastIndexOf('a') == string1.length - 1) {
  console.log(true);
} else {
  console.log(false);
}
if (string1.indexOf('http://') == string1.substr(0, 6)) {
  console.log(true);
} else {
  console.log(false);
}

let string2 = 'http://localhost/index.html';
console.log(string2.startsWith('http://'));
console.log(string2.endsWith('.html'));

let string3 = '1-2-3-4-5';
console.log(string3.split('-'));

string3 = '12345';
console.log(string3.split(''));

let arr = [1, 2, 3, 4, 5];
console.log(arr.join('-'));