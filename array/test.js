'use strict'
/*
* 提供了堆栈和队列行为的函数
* 万能修改数组函数
* 没有操作符重载也就没有数组+操作
* 用切片拷贝
*/
var RESULT = '';

function print(newOutput) {
	RESULT += newOutput + '\n'
}

function alertAll() {
	alert(RESULT)
}

//-----------------basicKonwledge-------------------------//
function basicKnowlodge() {
	var cmds = ['ls', 'pwd', 'cd', 'rm', 'cp'];
	print(cmds.length);
	cmds[0] = 'cat';
	// js可以直接修改数组大小
	cmds[6] = 'less';
	for (var i = 0; i != 7; ++i) {
		print(cmds[i]);
	}
}

//----------------------堆栈行为操作---------------------------//
function stackOps() {
	var arr = ['TCP', 'UDP', 'SMTP', "HTTP", "ISO"];
	print(arr.length);
	arr.push('HTTPS');
	print(arr.length);
	arr.pop()
	for (var i = 0; i != arr.length; ++i) {
		print(arr[i]);
	}
}

//---------------------------队列行为---------------------------------//
function queueOpa() {
	var linuxs = ['Ubuntu', 'Redhat', 'Fedora', 'CentOS',]
	linuxs.unshift('Solus')
	for (var i = 0; i != linuxs.length; ++i) {
		print(linuxs[i]);
	}
	linuxs.shift()
	print(linuxs.length)
}

//-----------------------------otherOps-------------------------------//
function otherOps() {
	// 反转
	var arr = ['linux', 'unix', 'mac', 'dos'];
	print(arr.indexOf('linux'));
	var rArry = arr.reverse(); // 居然有返回值的修改了原数组
	print(rArry);
	print(arr);
	// 排序
	var arr1 = ['1', 'b', 'a', '4'];
	var arr2 = arr1;
	var sortedArr = arr1.sort();
	print(sortedArr);
	print(arr1)
	print(arr2) // 如何拷贝?
	// slice切片可以用于拷贝数组
	var arr3 = ['一本道', '东京热', 'IDEApocket', '100girl']
	print(arr3.slice()) // 用于拷贝
	print(arr3.slice(1,4))
	// 万能剪切数组方法
	var arr4 = [1, 2, 3, 4, 5, 6];
	arr4.splice(0, 2, 7, 8); // 参数剪切的起始点，删除的个数，后面是插入的内容
	print(arr4);
	// concat
	var arr5 = arr3.concat([9, 10 , [0]]);
	print(arr5);
	// join类似python
	print('一些日本av公司: ' +  arr5.join(','))
}

function main() {
	// basicKnowlodge();
	// stackOps();
	// queueOpa();
	otherOps();
	alertAll();

}

main();