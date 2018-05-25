
//ld
var meitu =document.getElementById("meitu");
//console.log(meitu)
//class
 var buke =document.getElementsByClassName("buke")[0];
 var ke= document.getElementsByClassName("ke")[0];
 var tu=buke.childNodes;
 //console.log(ke);
// //tagname
 var div =document.getElementsByTagName("div");
 //console.log(div);
 var suibian =document.getElementById("meitu").getElementsByTagName("img")
var suibianson= document.getElementById("meitu").children;
 console.log(suibianson)
 //将第一个图片转到最后
//var last = buke.appendChild(ke);
//var suibian1= buke.insertBefore(ke,suibianson[3])
//替换
//var mode = buke.replaceChild(ke,suibianson[3]);
//移除
var suibian2=document.getElementById("suibian")
var move = suibian2.insertBefore(ke,buke);