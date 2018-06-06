//字符规则
var wh=/\s/ ;   //空格规则
var wh=/\S/ ;   //非空格规则
var wh=/\d/ ;   //数字规则
var wh=/\D/ ;   //非数字规则
var wh=/\w/ ;   //字符规则（字母+数字+下划线_）
var wh=/\W/ ;   //非字符规则



// =========================================================================
//test()

//var guizhe=/\d/; // 正则
// qq号检测
  var guizhe=/^[1-9]\d{4,12}/
// 邮箱检测
//var guizhe=/^([0-9a-zA-Z])+\@([a-zA-Z0-9])+\.([a-zA-Z])+$/
var mas="test()"
var h1=document.getElementsByTagName("h1")[0];

h1.innerHTML=mas
// 捕捉title，输出正则
var title=document.getElementsByClassName("title")[0]
title.innerHTML=guizhe;
var testStyle=document.getElementById("test-style")
var button1=document.getElementsByTagName("button")[0];
var end=document.getElementsByClassName("end")[0];
button1.innerHTML="使用"+mas;
button1.addEventListener("click",function(){
    // test方法
    end.innerHTML=guizhe.test(testStyle.value);
})







// 邮箱检测
//var guizhe=/^([0-9a-zA-Z])+\@([a-zA-Z0-9])+\.([a-zA-Z])+$/