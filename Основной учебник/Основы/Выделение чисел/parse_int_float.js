"use strict";

let value1 = '5px';
let value2 = '6px';
alert(`Сумма пикселей ${value1} и ${value2} - ${parseInt(value1) + parseInt(value2)}`);

value1 = '5.5px';
value2 = '6.25px';
alert(`Сумма пикселей ${value1} и ${value2} - ${parseFloat(value1) + parseFloat(value2)}`);

alert(`Сумма пикселей ${value1} и ${value2} - ${parseFloat(value1) + parseFloat(value2)}px`)