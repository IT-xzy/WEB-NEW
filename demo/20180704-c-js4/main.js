var btn1 = document.getElementById("btn1");
var dsn = document.getElementsByClassName("dsn");
btn1.onclick = function () {
    dsn[0].className = "dsb"
}
var ull = document.getElementById("ull");
var li4 = document.getElementsByClassName("li4");

window.onload = function () {    
    //demo1
    // for(var i=0;i<li4.length;i++) {
    //     li4[i].onclick = function() {
    //     alert(123)
    //     }        
    // }

    //demo2
    // ull.onclick = function() {        
    //     alert(123)        
    // }

    //demo3
    // ull.onclick = function(ev) {
    //     var ev = ev || window.event;
    //     var target = ev.target || ev.srcElement;
    //     if(target.className=='li4') {
    //         alert(123)
    //     }
    // }






    // //事件代理
    // //小程序中使用的思路 

    //     var box = document.getElementById("box");
    //     box.onclick =function(ev) {
    //         var ev = ev || window.event;
    //         var target = ev.target || ev.srcElement;
    //         console.log(ev)
    //         switch (target.dataset.index) {
    //             case "0" :
    //             alert("添加")
    //             break;
    //             case "1" :
    //             alert("删除")
    //             break;
    //             case "2" :
    //             alert("移动")
    //             break;
    //             case "3" :
    //             alert("选择")
    //             break;
    //         }
    //     }

    // // // demo4
    //     var ul2 = document.getElementById("ul2")
    //     ul2.onmouseover= function(ev) {
    //         var ev = ev||window.event;
    //         var target = ev.target||srcElement;
    //         console.log(ev)
    //         if(target.nodeName.toLowerCase()=='li') {
    //             target.style.background = "red";
    //         }
    //     }
    //     ul2.onmouseout= function(ev) {
    //         var ev = ev||window.event;
    //         var target = ev.target||srcElement;
    //         console.log(ev)
    //         if(target.nodeName.toLowerCase()=='li') {
    //             target.style.background = "#fff";
    //         }
    //     }       
    //     var add1 =document.getElementById("add1")
    //     add1.onclick = function() {       
    //         var newLi = document.createElement('li')
    //         ul2.appendChild(newLi)
    //     } 
    //     var add2 =document.getElementById("add2")
    //     add2.onclick = function() {
    //         console.log(this)

    //     }


}
