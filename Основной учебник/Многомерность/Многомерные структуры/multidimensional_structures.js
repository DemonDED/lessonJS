"use strict";

let students = {
	'group1': ['name11', 'name12', 'name13'],
	'group2': ['name21', 'name22', 'name23'],
	'group3': ['name31', 'name32', 'name33'],
};
console.log(students.group3[0]);

let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
	],
	4: [
		'data41',
		'data42',
		'data43',
	],
};

for (let valuesData in data) {
  for (let numData of data[valuesData]) {
    console.log(numData);
  }
}

let data2 = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
		3: 'data33',
	},
];

for (let valuesData of data2) {
  for (let dataVal in valuesData) {
    console.log(valuesData[dataVal]);
  }
}

data = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
			'data422',
			'data423',
		],
	},
];

for (let numData of data) {
  for (let valuesData in numData) {
    for (let elem of numData[valuesData]) {
      console.log(elem);
    }
  }
}

let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

for (let employe of employees) {
  console.log(`${employe.name} - ${employe.salary}`);
}
let sum = 0;
for (let salaryValues of employees) {
  sum += salaryValues.salary;
}
console.log(sum);

employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];

sum = 0;
for (let employe of employees) {
  if (employe.age >= 30) {
    sum += employe.salary;
  }
}