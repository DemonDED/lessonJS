// Массивы в JS \\

/*
Массив представляет собой переменную, в которой в упорядоченном виде можно
хранить целый набор каких-то значений.

Значения, которые хранит массив, называются элементами. 
Элементы разделяются между собой запятой. После этой запятой принято ставить пробелы. 
*/

// Для создания массива используются квадратные скобки.
let arr = ['a', 'b', 'c'];
/*
Кроме строк и чисел в массиве можно хранить все допустимые типы данных,
а также смешивать их между собой в одном массиве.
*/
arr = [1, 2, 'a', 'b', null, true, false];
/*
Задача 1:

Создайте массив с числами. Выведите его на экран с помощью функции alert,
а также выведите его в консоль с помощью console.log. 
*/
arr = [1, 2, 3, 4, 5];
alert(arr);
console.log(arr);
/*
Задача 2:

Создайте массив со строками.
Выведите его на экран с помощью функции alert,
а также выведите его в консоль с помощью console.log. 
*/
arr = ['a', 'b', 'c', 'd', 'e'];
alert(arr);
console.log(arr);

// Получение элементов массивов в JS \\

console.log(arr[0]); // выведет 'a'
console.log(arr[1]); // выведет 'b'
console.log(arr[2]); // выведет 'c'

/*
Задача 3:

Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов.
*/
arr = [1, 2, 3];
console.log(arr[0], arr[1], arr[2]);
/*
Задача 4:

Дан следующий массив:
  let arr = [1, 2, 3];
Выведите на экран каждый из его элементов. 
Выведите на экран сумму элементов этого массива. 
*/
console.log(arr[0], arr[1], arr[2]);
let sum_arr = arr[0] + arr[1] + arr[2];
console.log(sum_arr);
/*
Задача 5:

Дан следующий массив:
  let arr = ['a', 'b', 'c', 'd'];

Выведите с помощью этого массива следующую строку:
  'a+b+c+d'
*/
arr = ['a', 'b', 'c', 'd'];
console.log(arr[0] + '+' + arr[1] + '+' + arr[2] + '+' + arr[3]);

// Длина массива в JS \\

// Длина массива находится с помощью свойства length.
console.log(arr.length);
/*
Задача 6:

Создайте массив с произвольными элементами. Выведите на экран последний элемент этого массива.
*/
arr = [1, 2, 'a', 'b', null, true, false];
console.log(arr[arr.length - 1]);

// Изменение элементов массива в JS \\

arr = ['a', 'b', 'c'];

arr[0] = '!';
console.log(arr); // выведет ['!', 'b', 'c']
/*
Задача 7:

Создайте массив с элементами 'a', 'b', 'c'.
Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.
*/
arr = ['a', 'b', 'c'];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
console.log(arr);
/*
Можно также прочитывать текущее значение элемента,
выполнять с ним какие-то операции и записывать измененное значение обратно в этот элемент.
*/
arr[0] += arr[0] + 3;
++arr[1];
console.log(arr);

// Добавление элементов по ключам JS \\

/*
Элементы в массив не обязательно добавлять сразу в момент объявления этого массива.
Можно вначале объявить этот массив, а затем добавить в него необходимые элементы.
*/
let arrKey = [];
arrKey[0] = 'a';
arrKey[1] = 'b';
arrKey[2] = 'c';
console.log(arrKey);
// Можно также добавлять элементы в массив, уже заполненный данными.
arrKey[3] = 'd';
console.log(arrKey);
/*
Задача 8:

С помощью описанного приема создайте массив с элементами 1, 2 и 3.
Добавьте ему в конец элементы 4 и 5.
*/
let arrKey2 = [];
arrKey2[0] = 1;
arrKey2[1] = 2;
arrKey2[2] = 3;
console.log(arrKey2);
arrKey2[3] = 4;
arrKey2[4] = 5;
console.log(arrKey2);

// Разреженные массивы в JS \\

// Если в массиве будут ключи с пропусками, то можно получить разреженный массив.
arr = ['a', 'b', 'c'];
arr[4] = '!';
console.log(arr); // выведет ['a', 'b', 'c', undefined, '!']
console.log(arr.length) // выведет 5
/*
Узнайте длину следующего массива:
  let arr = [];

  arr[3] = 'a';
  arr[8] = 'b';
*/
arr = [];
arr[3] = 'a';
arr[8] = 'b';
console.log(arr.length);

// Добавление элементов через push в JS \\

// С помощью специального метода push можно добавлять элементы в конец массива.
arr = [];
arr.push('a');
arr.push('b');
arr.push('c');
console.log(arr); // выведет ['a', 'b', 'c']
/*
Задача 9:

Заполните массив числами 1, 2 и 3.
Добавьте ему в конец элементы 4 и 5.
*/
arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr);
arr.push(4);
arr.push(5);
console.log(arr);

// Ключи массивов из переменных в JS \\

// Пусть у нас дан вот такой массив:
arr = ['a', 'b', 'c'];

// Выведем на экран элемент с ключом 0:
arr = ['a', 'b', 'c'];
console.log(arr[0]); // выведет 'a'

// Давайте теперь ключ выводимого элемента не будем писать непосредственно в квадратных скобках, а запишем его в переменную:
arr = ['a', 'b', 'c'];
let key = 0; // запишем ключ в переменную

// Используем теперь нашу переменную для вывода соответствующего элемента:
arr = ['a', 'b', 'c'];
key = 0; // запишем ключ в переменную

console.log(arr[key]); // выведет 'a'
/*
Задача 10:

Дан следующий массив:
  let arr = ['a', 'b', 'c'];

Дана также переменная:
  let key = 2;

Выведите на экран элемент, ключ которого хранится в переменной key. 
*/
key = 2;
console.log(arr[key]);
/*
Задача 11:

Дан следующий массив:
  let arr = [1, 2, 3, 4, 5];

Даны также переменные:
  let key1 = 1;
  let key2 = 2;

Найдите сумму элементов, ключи которых хранятся в наших переменных. 
*/
arr = [1, 2, 3, 4, 5];
let key1 = 1;
let key2 = 2;
console.log(arr[key1] + arr[key2]);
// Можно удалять элементы массивов с помощью оператора delete.
delete arr[1];
console.log(arr);
// В результате элемент удалиться, но массив станет разреженным.
/*
Задача 12:

Дан массив:
  let arr = ['a', 'b', 'c', 'd', 'e'];

Удалите из него два элемента. Проверьте, какое станет значение свойства length после этого. 
*/
arr = ['a', 'b', 'c', 'd', 'e'];
delete arr[0];
delete arr[1];
console.log(arr);
console.log(arr.length);

// Практика на поиск ошибок \\

/*
Задача 13:
Код должен вывести последний элемент массива:
  let arr = [1, 2, 3, 4, 5];
  console.log(arr[arr.length]);
*/
arr = [1, 2, 3, 4, 5];
console.log(arr[arr.length - 1]);
/*
Здача 14:

Код должен найти сумму элементов массива:
  let arr = [1, 2, 3, 4, 5];
  console.log(arr[1] + arr[2] + arr[3] + arr[4] + arr[5]);
*/
console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4]);
/*
Задача 15:

Код должен вывести длину массива:
  let arr = {1, 2, 3, 4, 5};
  console.log(arr.length]);
*/
arr = [1, 2, 3, 4, 5];
console.log(arr.length);