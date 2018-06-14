// //every

var num = [1, 2, 3, 4, 5];
var everyResault = num.every(function (item, index, array) {
    return (item > 2);
});
console.log(everyResault);

//some
var someResault = num.some(function (item, index, array) {
    return (item > 2);
});
console.log(someResault);

filter
var filterResault = num.filter(function (item, index, array) {
    return (item > 2);
});
console.log(filterResault);
//如果用for循环
var num2 = [];
for (i = 0; i < num.length; i++) {
    if (num[i] > 2) {
        num2.push(num[i]);
    };
};
console.log(num2);
//map
var mapResault = num.map(function (item, index, array) {
    return item * 2;
    // return (item > 2);
});
console.log(mapResault);
//forEach
var forResault = num.forEach(function (item, index, array) {
    console.log(item * 3)
});
console.log(forResault);