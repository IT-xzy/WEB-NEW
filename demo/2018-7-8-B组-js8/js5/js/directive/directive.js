angular.module("myApp")
    .directive('helloWorld', function () {
        return {
            restrict: 'E',
            template: '<div><h1>Hi 我是阿珍</h1></div>',
            replace: false
        };
    }).directive("helloWorld2", function () {
        return {
            restrict: 'EAC',
            template: function (tElement, tAttrs) {
                var _html = '';
                _html += '<h1>' + 'hello ' + tAttrs.title + '</h1>';
                return _html;
            }
        };
    }).directive('hello', function () {
        return {
            restrict: 'E',
            templateUrl: 'hello.html',
            replace: true
        };
    }).directive('myDirective', function () {
        return {
            restrict: 'EA',
            scope: {},
            template: '<div>儿子:{{ name }}<input ng-model="name"/></div>'
        };
    });
// .directive('dirF', [function() {
//     // Runs during compile
//     return {
//         restrict: 'E',
//         scope: false,
//         replace: true,
//         template: [
//             '<div>',
//             '   <span>parentName</span>',
//             '   <span>{{ parentName }}</span>',
//             '   <input type="text" ng-model="parentName" />',
//             '   <span>scopeName</span>',
//             '   <span>{{ scopeName }}</span>',
//             '   <input type="text" ng-model="scopeName" />',
//             '</div>'
//         ].join(''),
//         controller : ['$scope', function ($scope){
//             $scope.parentName = '阿爸false';
//             $scope.scopeName = '阿珍false';
//         }]
//     };
// }])
// .directive('dirT', [function() {
//     return {
//         restrict: 'E',
//         scope: true,
//         replace: true,
//         template: [
//             '<div>',
//             '   <span>parentName</span>',
//             '   <span>{{ parentName }}</span>',
//             '   <input type="text" ng-model="parentName" />',
//             '   <span>scopeName</span>',
//             '   <span>{{ scopeName }}</span>',
//             '   <input type="text" ng-model="scopeName" />',
//             '</div>'
//         ].join(''),
//         controller: ['$scope', function ($scope) {
//             $scope.parentName = '阿爸True';
//             $scope.scopeName = '阿珍true';
//             //$scope.scopeName = 'scopeNameInDirectiveTrue';
//             // 在当前$scope中以已经生明的情况下，$scope.$watch监听的是自身的parentName
//             $scope.$watch('parentName', function(newValue, oblValue) {
//                 console.log('true  watch自身 scope parentName = ' + newValue);
//             });
//             // 监听父作用域中的parentName
//             $scope.$parent.$watch('parentName', function(newValue, oldValue) {
//                 console.log('true  watch 父scope parentName = ' + newValue);
//             });
//         }]
//     };
// }])
// .directive('dirON', [function() {
//     return {
//         restrict: 'E',
//         scope: {
//         },
//         replace: true,
//         template: [
//             '<div>',
//             '   <span>parentName</span>',
//             '   <span>{{ parentName }}</span>',
//             '   <input type="text" ng-model="parentName" />',
//             '   <span>scopeName</span>',
//             '   <span>{{ scopeName }}</span>',
//             '   <input type="text" ng-model="scopeName" />',
//             '</div>'
//         ].join(''),
//         controller: ['$scope', function ($scope) {
//             $scope.parentName = '阿爸object空';
//             //$scope.scopeName = 'scopeNameInDirectiveObjectWithNull';
//             // 在当前$scope中以已经生明的情况下，$scope.$watch监听的是自身的parentName
//             $scope.$watch('parentName', function(newValue, oblValue) {
//                 console.log('Object 空 watch自身 scope parentName = ' + newValue);
//             });
//             // 监听父作用域中的parentName
//             $scope.$parent.$watch('parentName', function(newValue, oldValue) {
//                 console.log('Object 空 watch 父 scope parentName = ' + newValue);
//             });
//         }]
//     }
// }])
// .directive('dirO', [function() {
//     return {
//         restrict: 'E',
//         scope: {
//             parentName : '@'    
//         },
//         replace: true,
//         template: [
//             '<div>',
//             '   <span>parentName</span>',
//             '   <span>{{ parentName }}</span>',
//             '   <input type="text" ng-model="parentName" />',
//             '   <span>scopeName</span>',
//             '   <span>{{ scopeName }}</span>',
//             '   <input type="text" ng-model="scopeName" />',
//             '</div>'
//         ].join(''),
//         controller: ['$scope', function ($scope) {
//             $scope.parentName = '阿爸Object有';
//             //$scope.scopeName = 'scopeNameInDirectiveObject';
//             // 在当前$scope中以已经生明的情况下，$scope.$watch监听的是自身的parentName
//             $scope.$watch('parentName', function(newValue, oblValue) {
//                 console.log('Object有 watch 自身 scope parentName = ' + newValue);
//             });
//             // 监听父作用域中的parentName
//             $scope.$parent.$watch('parentName', function(newValue, oldValue) {
//                 console.log('Object有  watch 父 scope parentName = ' + newValue);
//             });
//             // 监听父作用域中的scopeName
//             $scope.$parent.$watch('scopeName', function(newValue, oldValue) {
//                 console.log('Object有 watch 父 scope scopeName = ' + newValue);
//             });
//         }]
//     }
// }])
// .directive('testdirective', function () {
//     return {
//         restrict: 'EA',
//         replace: true,
//         transclude: true,
//         scope: {
//             title: '=testdirectiveTitle'
//         },
//         template: '<div>'
//         + '<div class="title" ng-click="toggle()">{{title}}</div>'
//         + '<div class="body" ng-show="showMe" ng-transclude></div>'
//         + '</div>',
//         link: function (scope, element, attrs) {
//             scope.showMe = false;
//             scope.toggle = function toggle() {
//                 scope.showMe = !scope.showMe;
//             }
//         }
//     }
// })

// .directive('attrsdirective', function () {
//     return {
//         link: function (scope, elements, attrs, controller) {
//             elements[0].onkeyup = function () { //从元素列表中获取元素，并绑定相应的事件
//                 //下面的意思是，如果输入大于5的数，边框变为红色
//                 if (this.value > 5) {
//                     this.style.borderColor = 'red';
//                 }
//                 else {
//                     this.style.borderColor = '';
//                 }
//             };
//         }
//     }
// })

// .directive('accordion', function () {
//     return {
//         restrict: 'EA',
//         replace: true,
//         transclude: true,
//         template: '<div ng-transclude></div>',
//         controller: function () { //声明一个内部的controller，用于传递值和方法
//             var expanders = [];
//             this.gotOpened = function (selectedExpander) {
//                 //angularJS的forEach用法
//                 /*var objs =[{a:1},{a:2}];
//                  angular.forEach(objs, function(data,index,array){
//                  //data等价于array[index]
//                  console.log(data.a+'='+array[index].a);
//                  });
//                  参数如下：
//                  objs：需要遍历的集合
//                  data:遍历时当前的数据
//                  index:遍历时当前索引
//                  array:需要遍历的集合，每次遍历时都会把objs原样的传一次。
//                 * */
//                 angular.forEach(expanders, function (expander) {
//                     if (selectedExpander != expander) {
//                         expander.showMe = false;
//                     }
//                 });
//             }

//             this.addExpander = function (expander) {
//                 expanders.push(expander);
//             }
//         }
//     }
// }).directive('expander', function () {
//     return {
//         restrict: 'EA',
//         replace: true,
//         transclude: true,
//         require: '^?accordion',//意思是将accordion的控制器传到指令中，从而在下方使用它的函数 ^的意思是需要遍历dom树，？的意思是找不到不报错
//         scope: {
//             title: '=expanderTitle'
//         },
//         template: '<div>'
//         + '<div class="title" ng-click="toggle()">{{title}}</div>'
//         + '<div class="body" ng-show="showMe" ng-transclude></div>'
//         + '</div>',
//         link: function (scope, element, attrs, accordionController) {
//             scope.showMe = false;
//             accordionController.addExpander(scope);

//             scope.toggle = function toggle() {
//                 scope.showMe = !scope.showMe;
//                 accordionController.gotOpened(scope);
//             }
//         }
//     }
// });