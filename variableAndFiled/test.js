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


function foo() {
	var x = 1;
	function bar() {
		var y = x + 1;
		print(y); // NaN 内部有x自动屏蔽外层x,此时x为初始化
		var x = 4;
		print(x);
	}
	bar();
}

/*
* 函数先扫描函数内所有申明再执行函数语句
*/
function variableUp() {
	var x = 0,
	y = x + 1,
	z, k;
	print(x);
	print(y);

}

function globalVariable () {
	// for (var attr in window) {
	// 	print(attr)
	// }
	var ob = {
		f1: function () {}
	};
	print('f1' in ob);
	print('alert' in window);
	print('globalVariable' in window);
}

function namespace() {
	var MYAPP = {}; // 定义一个对象包
	MYAPP.name = 'myapp';
	print(MYAPP.name); // 通过包名访问
}

function bloclFiled() {
	for (var i = 0; i != 5; ++i) {

	}
	print(i);
	for (let j = 0; j!= 6; ++j) { // 使用let定义块机作用域
		
	}
	// print(j); 未定义
}

function getCircleArea(radius) {
	const PI = 3.141592654;
	return function () {
		return PI * radius * radius;
	}

}


// 使用解构赋值简化赋值语句，快速获取对象属性，直观
function deconstructionFoo() {
	var x, y, z;
	[x, y, z] = ['google', 'MS', 'apple'];
	print('x=' + x + ',y=' + y + ',z=' + z);
	var {name, age} = {
		name: 'LY',
		age: 8
	};

	var str =`name=${name},age=${age}`;
	print(str);
	// 嵌套,层次要一直
	var {name, addr:{city, stree}} = {
		name: 'LY',
		addr: {
			city: "nanjing",
			stree: 'ziyangdadao'
		}
	};
	// 带默认值，获取不到时就是undefine
	var {name, isSingle, birthday='1,27'} = {name: "ly",
		age: 20
	};
	print(isSingle);
	print(birthday);
	// 转存
	var actor, time, actress;
	({actor:actress, time} = {actor: '苍老师', // {开头的语句会被视为语句块
	time: '105mins'
	});
	print(actress)

	// 一些场景
	var a = 1,
		b = -1;
	[a, b] = [b, a]; 
	print(`a=${a},b=${b}`);
	var {hostname:domain, pathname:path} = location;
	print(domain);
	print('=========')
	print(path);
	var myPow = function ({x, d=2}) {
		return d === 2 ? x *x : x * x * x;
	};
	print(myPow({x:2}));
}

function main() {
	// foo();
	// variableUp();
	// globalVariable();
	// bloclFiled();
	// print(getCircleArea(2)());
	deconstructionFoo();
	alertAll();

}

main();