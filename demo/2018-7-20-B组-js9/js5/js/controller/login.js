
angular.module("myApp")
    .controller("loginController", function (adminService, $scope, $http, $state) {
        $scope.change = function () {
            $scope.tip = "";
        };
        $scope.go = function () {
            adminService.login($scope.params).then(function (res) {
                console.log(res)
                if (res.data.code === 0) { //如果正确，跳转
                    $state.go('list.article');
                } else { //如果账号密码错误，提示文本：用户不存在
                    $scope.tip = res.data.message;
                };
            });
        };
    });