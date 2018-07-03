function fn1(f) {
    alert(1);
    f();
};

function fn2(f) {
    alert(2);
    f();
};

function fn3() {
    alert(3);

};

fn1(function () {
    fn2(fn3);
});

//回调函数
// 同步回调
function A(callback){
    console.log("I am A");
    callback();  //调用该函数
}
function B(){
   console.log("I am B");
}
A(B);

// 异步回调
function f1(n, callback) {　
    setTimeout(function () {
    var count = 0,
        i, j;

    for (i = n; i > 0; --i) {
        for (j = n; j > 0; --j) {
            count += 1;
        }
    };
    console.log(1);

    }, 1000)
    callback();
    console.log(2);
}

function f2() {
    console.log("函数f2")
}


function f3() {
    console.log(3)
    setTimeout(function () {
        console.log(4)
    }, 5000)
    console.log(5)
}

f1(100000, f3);
f2();
f3();

//事件监听



function fb() {
    alert(9999)
}
$("#b1").on('click', fb);



// promise

function f7() {
    var def = $.Deferred();
    setTimeout(function () {
        // f1的任务代码
        console.log("this is f7");
        def.resolve();
    }, 500);
    return def.promise();
}

function f8() {
    console.log("this is f8");
}

function f9() {
    console.log("this is f9");
}
f7().then(f8).then(f9);