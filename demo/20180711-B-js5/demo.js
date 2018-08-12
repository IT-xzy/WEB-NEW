// 证明单线程的一个例子：
var d = new Date;

setTimeout(function () {
  console.log(new Date - d);
}, 1000);

while (true)
  if (new Date - d > 3000) break;

console.log(new Date - d);
// 一个定时器
function timer(time, callback) {
  setTimeout(function () {
    callback();
  }, time);
}

timer(3000, function () {
  console.log(123);
})

console.log(new Date - d);


setTimeout(function () {

  console.log(123);

}, 3000);
console.log(new Date - d);

setTimeout(function () {

  console.log(1);
  console.log(new Date - d);
  setTimeout(function () {

    console.log(2);
    console.log(new Date - d);
    setTimeout(function () {

      console.log(3);
      console.log(new Date - d);
      setTimeout(function () {

        console.log(4);
        console.log(new Date - d);
      }, 3000);
    }, 3000);
  }, 3000);
}, 3000);
console.log(new Date - d);