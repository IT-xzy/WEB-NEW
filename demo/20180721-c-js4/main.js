function a1(){
    return 10;//这个时候，函数a的值会等于10，并且函数中下面的内容不再执行
    document.write('<div class="print-result">' + "demo1" + '</div>');//由于上面已经return了，这条代码不会执行
}
function a2(){
    document.write('<div class="print-result">' + "demo1" + '</div>');//由于上面已经return了，这条代码不会执行
    return 10;//这个时候，函数a的值会等于10，并且函数中下面的内容不再执行
}

function b1() {
    function a3( b, c ) {
    return b  + c;
    }
    // 那么调用：
    var abc1 = a3(5, 80);
    console.log(abc1)
}
    // 这个时候，abc这个变量的值会是85
    // 如果想直接输出结果，不要返回值那就
function b2() {
    function a4( b, c ) {
        document.write( b + c );
    }
        // 这个时候调用， 
        // 那么页面会输出85，但abc是没有值的;
    var abc2 = a4(6, 80);
    console.log(abc2)
}
// function demo4() {
//     return false;
// }

function counter() {
    for (var count=1; count<10; i++) {
    console.log(count + "A");
    return;                         //直接就返回了，下面的代码不会再执行
    console.log(count + "B");
    }
    console.log(count + "C");
}

function counter2() {
    for (var count = 1; ; count++) {  // infinite loop
    console.log(count + "A"); // until 5
    if (count === 5) {
    return;
    }
    console.log(count + "B");  // until 4 （因为在5的时候，就已经return了）
    }
    console.log(count + "C");  // never appears （因为这个c写在了for循环的外面）
}



