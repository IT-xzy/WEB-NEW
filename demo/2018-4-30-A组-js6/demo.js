var app = angular.module("myApp",[]);
/*$scope*/
app.controller("parentCtrl",function ($scope) {
	$scope.test = "测试";
    $scope.cover = "覆盖测试";
})
app.controller("childCtrl",function ($scope) {
	$scope.childTest = $scope.test;
	$scope.cover = "子覆盖测试";
})

/*this*/
// app.controller("parentCtrl",function($scope) {
//     var vm = this;
//     vm.test = "测试";
//     vm.cover ="覆盖测试";
// })

// app.controller("childCtrl",function($scope) {
//     var vm = this;
//     vm.cover = "子覆盖测试";
// })

// app.controller("parentCtrl",function($scope) {
// 	var vm = this;
//     /*vm和$scope是否相等？*/
//     $scope.abc = function() {
//         console.log(vm === $scope);
//     }
//     $scope.abc();
// })
