function f1() {};
var f2 = function () {};
var f3 = new Function('str', 'console.log(str)');




var o1 = {};
var o2 = new Object();

var o3 = new f1();


console.log(typeof Object); //function
console.log(typeof Function); //function


console.log(typeof o1); //object
console.log(typeof o2); //object
console.log(typeof o3); //object


console.log(typeof f1); //function
console.log(typeof f2); //function
console.log(typeof f3); //function




//原型对象
function f1() {};
console.log(f1.prototype) //f1 {}
console.log(typeof f1.prototype) //Object
console.log(typeof Function.prototype) // Function
console.log(typeof Object.prototype) // Object
console.log(typeof Function.prototype.prototype) //undefined

//原型对象作用
var person = function (name) {
    this.name = name
};
person.prototype.getName = function () {
    return this.name;
}
var zjh = new person("芝麻");
zjh.getName(); //芝麻
console.log(zjh.getName())


console.log(zjh.__proto__ === person.prototype) //true 
console.log(person.prototype.__proto__ === Object.prototype) //true
console.log(Object.prototype.__proto__) //null