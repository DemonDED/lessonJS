"use strict";

let test = true;

if (test) {
console.log('+++');
} else {
console.log('---');
}

test = true;

if (!test) {
console.log('+++');
} else {
console.log('---');
}

test = true;

if (!test) {
console.log('+++');
} else {
console.log('---');
}

test = true;

if (test) {
console.log('+++');
} else {
console.log('---');
}

let test1 = true;
let test2 = true;

if (test1 && test2) {
console.log('+++');
} else {
console.log('---');
}

test1 = true;
test2 = true;

if (test1 && !test2) {
console.log('+++');
} else {
console.log('---');
}

test1 = true;
test2 = true;

if (!test1 && !test2) {
console.log('+++');
} else {
console.log('---');
}

test1 = true;
test2 = true;

if (test1 && test2) {
console.log('+++');
} else {
console.log('---');
}

test1 = true;
test2 = true;
let test3 = true;

if (test1 && test2 && test3) {
console.log('+++');
} else {
console.log('---');
}

test1 = true;
test2 = true;
test3 = true;

if (test1 || test2 && test3) {
console.log('+++');
} else {
console.log('---');
}

test1 = true;
test2 = true;
test3 = true;

if (test1 || !test2 && !test3) {
console.log('+++');
} else {
console.log('---');
}