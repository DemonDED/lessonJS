"use strict";

let string = 'Hello JavaScript!';
let last = string.length - 1;
let preLast = string.length - 2;
let prePreLast = string.length - 3;

alert(`Последний символ строки - ${string[last]},
предпоследний - ${string[preLast]},
препредпоследний - ${string[prePreLast]}.`)