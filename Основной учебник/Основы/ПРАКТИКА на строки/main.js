"use strict";

let valueForTask1 = '12345';
let sumForTask1 = Number(valueForTask1[0]) + Number(valueForTask1[1]) + Number(valueForTask1[2]) + Number(valueForTask1[3]) + Number(valueForTask1[4]);
console.log(`Сумма цифр строки ${valueForTask1} - ${sumForTask1}`);

let valueForTask2 = 12345;
let stringValueForTask2 = String(valueForTask2);
let sumForTask2 = Number(stringValueForTask2[0]) + Number(stringValueForTask2[1]) + Number(stringValueForTask2[2]) + Number(stringValueForTask2[3]) + Number(stringValueForTask2[4]);
console.log(`Сумма цифр числа ${valueForTask2} - ${sumForTask2}`);

let valueForTask3 = 12345;
let stringValueForTask3 = String(valueForTask2);
let sumForTask3 = Number(stringValueForTask3[0]) * Number(stringValueForTask3[1]) * Number(stringValueForTask3[2]) * Number(stringValueForTask3[3]) * Number(stringValueForTask3[4]);
console.log(`Произведение цифр числа ${valueForTask3} - ${sumForTask3}`);

let valueForTask4 = 12345;
let stringValueForTask4 = String(valueForTask4);
let reverseValueForTask4 = stringValueForTask4[4] + stringValueForTask4[3] + stringValueForTask4[2] + stringValueForTask4[1] + stringValueForTask4[0];
console.log(reverseValueForTask4);