// 下面的变量定义在全局作用域(global scope)中
var num1 = 20,
    num2 = 4,
    name = "Chamahk";

// 本函数定义在全局作用域
function multiply() {
  return num1 * num2;
} // 返回 80

// 嵌套函数的例子
function getScore() {
  var num1 = 2,
      num2 = 3;
  
  function add() {
    return name + " scored " + (num1 + num2);
  }
  
  return add();
}// 返回 "Chamahk scored 5"

// for
var n = 0;
for(var i = 0 ; i < 10; i ++) {  
  n += i;
}
console.log(  num1 + '\n'+ multiply() + '\n'+getScore()+ '\n' + i + '\n' + n + '\n' );