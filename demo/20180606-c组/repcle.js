
// replace()
var guizhe=/^[0-9]/g// 正则



var mas="replace()"
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
    end.innerHTML=testStyle.value.replace(guizhe,"*");
    
})








// //隐藏代码
// var guizhe=/^[\d]/g; 
// ===========================================================================


// // 检测replace方法
// input.addEventListener("input",function(){
//     this.value=this.value.replace(/[^\d]/,"");
// })