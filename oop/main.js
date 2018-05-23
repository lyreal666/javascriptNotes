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

function gettingStarted() {
	// 初识js基于原型的oop
	var Student = {
		name: 'LY',
		age: 16,
		gf: null,
		major: 'IOT'
	};

	var ly = {

	};
	ly.__proto__ = Student;
	print(ly.age);

}

// 如何给一类对象创建共有属性?
// 通过同一个函数对象创建对象
function prototypeChain() {
// 认识原型链和学会写构造函数
	function Student(props) {		
		this.run = props.run; // 默认返回this
		this.name = props.name;
	}

	function setStudentPrototype() {
		Student.__proto__.say = () => { // 原型因为继承出现
			print('say somethings....');
		};

	}

	function createStudent(props) {
		setStudentPrototype();
		return new Student(props || {}); //使用构造函数必须使用new关键字
	}

	function foo() {

	}
	var ly = createStudent({name: 'ly', run: () => {
		print('run.............');
	}});
	print(ly.name);
	print('constructor' in ly);
	print(Object.getPrototypeOf(ly) == Student.prototype);
	print(ly === Student);
	print(ly instanceof Function);
	print(Student instanceof Function);
	print(Student.__proto__ === Function.__proto__);
	var arr1 = new Array();
	var arr2 = new Array();
	// print(arr1 instanceof arr2); arr2不可调用
}

	function inheritInit() {
		function inherits(sub, parent) {
			function bridge() {};
			bridge.prototype = parent.prototype;
			sub.prototype = new bridge;
			sub.prototype.constructor = sub;
		}


		function Parent(props) {
			this.name = props.name || 'father';
		}

		function Child(props) {
			Parent.call(this, props || {});
			this.grade = props.grade || 5;
		}

		inherits(Child, Parent);
		var c = new Child({name: 'ly', grade: 4});
		print(c.name);
		print(c.grade);

		
	}
function main() {
	// gettingStarted();
	// prototypeChain();
	inheritInit();
	alertAll();

}

main();