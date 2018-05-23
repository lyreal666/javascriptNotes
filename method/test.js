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

// decoractor
function statisticsPrint() {
	window.counter = 0;
	var f = function (newOutput) {
		++counter;
		return print(newOutput);
	};
	return f;
}

var new_print = statisticsPrint();

function method() {
	var student = {
		name: 'xiaoming',
		run: function () { // 对象中的函数称为方法
			print('run');
		},
		say: function () {
			var that = this; // 想要方法内部函数获取this,需要重新声明一个变量只想this
			print(this.name);
			function getThis() {
				print(that.name); // this只有在外层是对象才能访问
			} 
			getThis();
		},
		age: 20
	};
	student.run();
	student.say();
	// 
}

var ball = 'basketball';
function test() {
	print('ball' in window);
}
test();

//  使用apply,call
function teachMethod() {
	print(this.kch);
}

var teacher = {
	kch: 35699,
	name: 'caoyuanlong',
	teach: teachMethod
}
teachMethod.apply(teacher, []);
teachMethod.call(teacher);


function main() {
	method();
	alertAll();
	new_print('');
	new_print('');
	alert(window.counter);
}

main();