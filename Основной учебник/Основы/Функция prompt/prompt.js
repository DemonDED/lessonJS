"use strict";

let userAge = prompt('Каков ваш возраст?');
alert(`Возраст пользователя - ${userAge}`);

let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');

alert(Number(num1) + Number(num2));

let sideSquare = prompt('Введите значение стороны квадрата');
alert(`Площадь квадрата со стороной ${sideSquare} - ${Number(sideSquare * sideSquare)}`);

let widthRectangle = prompt('Введите ширину прямоугольника');
let heightRecangle = prompt('Введите высоту прямоугольника');

alert(`Периметр прямоугольника с шириной ${widthRectangle} и высотой ${heightRecangle} - ${Number(widthRectangle * 2) + Number(heightRecangle * 2)}`);
