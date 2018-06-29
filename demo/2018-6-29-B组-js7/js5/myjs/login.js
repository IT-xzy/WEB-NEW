


angular.module("myApp")
.controller("loginController", function ($scope, $http, $state) {
    $scope.change = function () {
        $scope.tip = "";
    };
    $scope.go = function () {
        $http({
            method: "POST",
            url: "/carrots-admin-ajax/a/login",
            params: $scope.params,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }).then(function successCallback(response) {
           
            if (response.data.code === 0) { //如果正确，跳转
                $state.go('list.welcome')
            } else if (response.data.code !== 0) { //如果账号密码错误，提示文本：用户不存在
                $scope.tip = response.data.message;
            };
        });
    };
});
