"use strict";

let str1 = 'abcde';
alert(`${str1[0]} ${str1[2]} ${str1[4]}`);

let newStr1 = str1[4] + str1[3] + str1[2] + str1[1] + str1[0];
alert(newStr1);

let str = str1;
let num = 3;
alert(str[num]);