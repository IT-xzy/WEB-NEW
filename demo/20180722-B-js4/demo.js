// 1 指向函数
function fn1 (num) {
  this.count ++;
  console.log('count:'+num);  
}
fn1.count = 0;
for(var i =0;i <10 ;i ++) {
  if(i>5) {
    fn1(i);
  }
}
console.log(fn1.count);
// 2 指向作用域
function fn2(){
  var a= 1;
  this.fn3();
}
function fn3(){
  console.log(this.a);
}
// 1 默认绑定
var a = 'global';
function fn4(){
  'use strict';
  console.log(this.a);
}
// 2 隐式绑定
var obj = {
  a: 'local',
  fn: fn4,
};
// 3 显示绑定

// 4 new绑定
function fn5(a) {
  this.a = a;
}
var obj1 = new fn5(1);