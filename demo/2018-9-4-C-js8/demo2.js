var app = angular.module('myApp', []);
var names = ['a1', 'b1', 'b2', 'e1', 'd1'];
names.forEach(function (name) {
  app.directive(name, function () {
    return {
        compile: function () {
             console.log(name + ' compile');
            return {
                pre: function () {
                    console.log(name + ' preLink');
                },
                post: function () {
                    console.log(name + ' postLink');
                }
            };
        }
    };
  });
});