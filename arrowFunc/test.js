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

var ball = 'volleyball';
var test = () => {
	print(this.ball)
}
test();

function main() {
	var myPow = x => x*x;
	print(myPow(4));
	// 返回对象是为了不和语句块形式冲突要加括号
	(x, y) => ({value: x > y ? x : y,
		bool: x > y ? true : false })
	
	var add = (x, y) => {
		return x + y;
	};

	var student = {
		name: 'ly',
		fun: function () {
			print(this.name);
			that = this;
			function fun1() {
				print(that.name);
			}
		}, // 箭头函数修复了函数内this指向问题,apply,call的第一个参数会被忽略

		fun2: function () {
			print(this.name);
			var arrowFunc = () => {
				print(this.name);
			}

			arrowFunc.call(null)
		}
	}

	var arr = [1, 2, 10, 6];
	arr.sort((x, y) => {
		if (x > y) {
			return 1
		} else if (x < y) {
			return -1;
		} else {
			return 0;
		}
	});
	arr.forEach((e, i, a) => {
		print(e);
	});

	// generator
	function* increatmentId(init) {		while (true) {
			yield ++init;
		}
	}
	// 生成器函数每次返回的生成器对象不是同一个
	print(increatmentId(0).next().value);
	print(increatmentId(0).next().value);

	var g = increatmentId(1);
	print(g.next().value);
	print(g.next().value);
	alertAll();

}

main();