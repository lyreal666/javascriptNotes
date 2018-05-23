'use strict'
/*
*
*/
var RESULT = '';

function print(newOutput) {
	RESULT += newOutput + '\n';
}

function alertAll() {
	alert(RESULT);
}

function main() {
	// map
	var m1 = new Map([['LY', 21], ['jsq', 22]]);
	m1.set(['fl', 20]);
	// print(m1);
	// print(m1.get('LY'));
	m1.delete('jsq');
	// for (var e of m1) {
	// 	print(e);
	// }
	// print(m1);

	// set
	var s1 = new Set([1, 2, 3, '3', 3]);
	// for (var c of s1) { // for in 不行
	// 	print(c);
	// }
	s1.add(2);
	// print(s1);

	// Iterable Array,Map,Set都是Iterable子类
	// Iterable 支持for of
	// for in 的本质是遍历属性,数组每个索引被视为一个属性
	var arr = new Array(1, 2, 3, 5);
	arr.name = 'array';
	for (var e in arr) {
		print(e);
	}
	print('=========================')
	for (var e of arr) {
		print(e);
	}

	// forEach() 使用lanmbda
	m1.forEach(function (e, i, m) {
		print('index:${i} value:${e}');
	});
	s1.forEach(function (e, se, s) {
		print(e);
	});
	arr.forEach(function (e, i, a) {
		print(e);
	});

	alertAll();
}

main();