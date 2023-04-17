"use strict";

let arr = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
];
console.log(arr[3][2]);
console.log(arr[1][1]);
console.log(arr[2][0]);
console.log(arr[0][0]);

arr = [[1, 2], [3, 4], [5, 6]];
let sum = 0;
sum = arr[0][0] + arr[0][1] + arr[1][0] + arr[1][1] + arr[2][0] + arr[2][1];
console.log(sum);

arr = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
sum = arr[0][0][0] + arr[0][0][1] + arr[0][1][0] + arr[0][1][1] + arr[1][0][0] + arr[1][0][1] + arr[1][1][0] + arr[1][1][1];
console.log(sum);

arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
sum = arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] + arr[0][3][1] + arr[0][3][2][0] + arr[0][3][2][1] + arr[1][0] + arr[1][1][0] + arr[1][1][1];
console.log(sum);

arr = [[1, 2, 3], [4, 5], [6]];
sum = 0;
for (let subArr of arr) {
  for (let elem of subArr) {
    sum += elem;
  }
}
console.log(sum);

arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
sum = 0;
for (let subArr of arr) {
  for (let subSubArr of subArr) {
    for (let elem of subSubArr) {
      sum += elem;
    }
  }
}
console.log(sum);

arr = [[1, 2, 3], [4, 5], [6]];
sum = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }
}
console.log(sum);

arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
sum = 0;
for (let i = 0; i < arr.length; i++) {
  for(let j = 0; j < arr[i].length; j++) {
    for (let k = 0; k < arr[i][j].length; k++) {
      sum += arr[i][j][k];
    }
  }
}
console.log(sum);

arr = [];
for (let i = 0; i < 3; i++) {
  arr.push([]);
  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}
console.log(arr);

arr = [];
for (let i = 0; i < 3; i++) {
  arr.push([]);
  for(let j = 0; j <= 4; j++) {
    arr[i].push('x');
  }
}
console.log(arr);

arr = [];
for (let i = 0; i < 3; i++) {
  arr.push([]);
  for (let j = 0; j < 2; j++) {
    arr[i].push([]);
    for (let k = 1; k <= 5; k++) {
      arr[i][j].push(k);
    }
  }
}
console.log(arr);

console.log('Исправление ошибок!');

arr = [];

for (let i = 0; i < 3; i++) {
  arr.push([])
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

arr = [];

for (let i = 0; i < 3; i++) {
	arr.push([]);
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

arr = [];

for (let i = 0; i < 3; i++) {
	arr.push([]);
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

arr = [];
let k = 1;
for (let i = 0; i < 4; i++) {
  arr.push([]);
  for (let j = 0; j < 2; j++) {
    arr[i].push(k++);
  }
}
console.log(arr);

arr = [];
k = 2;
for (let i = 0; i < 4; i++) {
  arr.push([]);
  for (let j = 0; j < 3; j++) {
    arr[i].push(k);
    k += 2;
  }
}
console.log(arr);

arr = [];
let kk = 1;
for (let i = 0; i < 2; i++) {
  arr.push([]);
  for (let j = 0; j < 2; j++) {
    arr[i].push([]);
    for (let k = 0; k < 2; k++) {
      arr[i][j].push(kk++);
    }
  }
}
console.log(arr);