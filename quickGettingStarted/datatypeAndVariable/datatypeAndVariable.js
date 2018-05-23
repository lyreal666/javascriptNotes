'use strict'
/*
*js 6种数据类型Number,String,Undefine,Bollean,Null,Object
*/
var RESULT = '';

function print(newOutput) {
	RESULT += newOutput + '\n'
}

function alertAll() {
	alert(RESULT)
}

// -------------------------Number----------------------------//
function _number() {
	1;
	0.1;
	NaN;// Not a Number
	Infinity;// 无穷大，js规定的最大值2的345次方好像，极大值和极小值绝对值相等
	// 对于8进制,strict mode 不支持
	// alert(010);// show 8
	// alert(019);// show 19
	// 16进制
	alert(0x10);// 严格模式支持16进制 
	alert(Number('0x10'))
}

//-------------------------String---------------------------//
function _string() {
	alert("我爱学习，我在学习'javascript'");
}

//---------------------Boolean------------------------------------//
function _bool(rs) {
	// 不同于python, 都是小写
	true;
	false;
	alert(Boolean(''));// false
	// c风格&&,||,!
	if ((!true) || (1 < 2 && 3 < 4) ) {
		alert(true);
	}
	// 比较运算符，适用于任意数据类型
	alert(false == '');
	// 注意==和===区别，==会自动类型转换， ===更严格
	alert(false === '');
	// 特殊的NaN
	alert(NaN == NaN);
	// isNaN()
	alert(isNaN(1 / 0));
}

//--------------------------Null and Undefine------------------------------//
function nullAndUndefine() {
	/*
	*大多数情况应该用null,判断参数参数传递时undefine才有用
	*null 表示空对象
	*undefine 表示未定义
	*Null,Undefine都是只有一个值的数据类型，null,undefine
	*/
	var v1;
	var v2 = null
	print(v1);
	print(v2)
}
//------------------------------array---------------------------------//
function _array() {
	// 直接创建
	var arr1 = [0, 1, 2, 3];
	for (var i = 0; i != 4; ++i) {
		print(arr1[i]);
	}
	print(arr1)
	// 构造函数
	var arr2 = new Array('我 吃 柠 檬'.split(' '));
	print(arr2);
	// 直接创建更直观
}

//---------------------------Object------------------------------------//
/*
* 重要: 
* js 中对象都是有多个key-value构成
* js 对像中所有键都是字符串，value类型任意
* js 不允许自定义类
*/
function _object() {
	var student = {
		name: 'Ly',
		age: 21,
		friends: ['xiaohang', 'luojin', 'domngjiashun'],
		bfGf: {// value可以是任意的数据类型
			name: 'htt'
		},
		studying: 'javascript'
	};
	print(student.name)
	// key可以写字符串形式
	var ob = {
		'name': 'ob'
	}
	print(ob.name)
	print(student);
}

function main() {
	// _number() // 使用_ 目的不和内置的number函数冲突
	// _string();
	//_bool();
	// nullAndUndefine();
	//_array();
	_object();
	alertAll();

}

main();