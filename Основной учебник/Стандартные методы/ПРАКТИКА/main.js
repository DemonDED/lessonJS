"use strict";

let str = 'london';
let result = str.slice(0, 1).toUpperCase() + str.slice(1);
console.log(result);

str = 'word1 word2 word3';

// Разобьем строку в массив слов:
let words = str.split(' ');

for (let i = 0; i < words.length; i++) {
	// Увеличим регистр каждого слова:
	words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
}

// Сольем массив обратно в строку:
result = words.join(' ');
console.log(result); // выведет 'Word1 Word2 Word3'