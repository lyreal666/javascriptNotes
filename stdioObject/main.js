'use strict'
/*
* for in 循环
*/
var RESULT = '';

function print(newOutput) {
	RESULT += newOutput + '\n';
}

function alertAll() {
	alert(RESULT);
}

//--------------Date-----------------//
function testDate() {
	print(Date.now()); // 时间戳
	var date1 = new Date();
	print(date1);
	var start = Date.now();
	var doSomeThing = () => {
		var rs = 0;
		for (let i = 0; i != 20000; ++i) {
			rs += i;
		}
		print(rs);
	};
	doSomeThing();
	var end = Date.now();
	var costTime = end - start;
	print(costTime);
	// 俩种转换方法
	var date2 = new Date(Date.parse('2018-3-17'));
	print(date2);
	var date3 = new Date(Date.UTC(2018, 3, 17));
	print(date3);
	print(date3.valueOf());
	print(date1 instanceof (Date));
	var date4 = +new Date(); // !!!!
	print(date4)
}

function testRegExp() {
	// RegExp
	/*
	* \d,\s,\w,\[]
	* +, ?, *, .
	* [12], {count}, (arr), |, 
	* ^, $,  ?
	* g, i, m
	*/
	// 字符串形式表示正则表达式对象
	var reg1 = /^\d{3}\s?\d{8}$/g;
	var phoneNum = '151 79426476';
	print(reg1.test(phoneNum));
	var reg2 = new RegExp('^\\d{3}\\s?\\d{8}$', 'g');
	print(reg2.test(phoneNum));
	// 一些方法test, exec
	var reg3 = /([a-z]{3})(\w{4})(\d{4})/gi;
	var str1 = 'ytjjava1314ytjcjjj1314';
	var r1 = reg3.exec(str1);
	print(reg3.source);
	print(r1 + reg3.lastIndex);
	var r2 = reg3.exec(str1)
	print(r2 + reg3.lastIndex);
	print(reg3.valueOf() instanceof RegExp);
	// RegExp静态属性会基于最近一次执行更新
	print(RegExp.input);
	print(RegExp.rightContext);
	print(RegExp.leftContext);
	print(RegExp.lastParen); // 最后一个匹配组
	print(RegExp.lastMatch);
	// 切割也可以用正则表达式
	var strArr = "google apple   MS,IBM;;oracle".split(/\s+|,+|;+/);
	strArr.forEach((e, i, arr) => {
		print(e);
	});
}

var testJson = () => {
	var	obj = {
		name: 'obj',
		age: 18,
		son: {
			name: 'son',
			age: 3
		},
		lover: null
	};
	var json_str1 = JSON.stringify(obj, null, ' ');
	print(json_str1);
	var _obj = JSON.parse(json_str1);
	print(_obj.name);
	print(obj);

	var json_str2 = JSON.stringify(obj, (k, v) => {
		if (k === 'name') {
			v = 'obj_m';
		}
		return v; //序列化处理后有返回值的键值对
	}, 5);
	print(json_str2);

	var obj2 = {
		name: 'obj2',
		toJSON: () => ({
			name: 'ly',
			isSingle: true
		})
	}
	var json_str3 = JSON.stringify(obj2, null, ' ');
	print(json_str3);

};

function main() {
	// testRegExp();
	testJson();
	alertAll();

}

main();