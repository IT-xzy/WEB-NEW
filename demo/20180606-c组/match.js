//字符规则
var wh=/\s/ ;   //空格规则
var wh=/\S/ ;   //非空格规则
var wh=/\d/ ;   //数字规则
var wh=/\D/ ;   //非数字规则
var wh=/\w/ ;   //字符规则（字母+数字+下划线_）
var wh=/\W/ ;   //非字符规则






// ============================================================================

// match()
//var guizhe=/\d/g; // 正则
   
 //var guizhe= /\d-+/g;  // 全局匹配数字，横杠，横杠数量至少为1
//var guizhe=/(\d-)+/g;  //全局匹配数字，横杠，数字和横杠整体数量至少为1
var guizhe= /(\d+)(-)/g;   //  全局匹配至少一个数字，匹配一个横杠 
//var guizhe=/[0-9]/g;      //全局匹配0-9范围里的数字。
var mas="match()"
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
    end.innerHTML=testStyle.value.match(guizhe);
    
})










