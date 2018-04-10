"use strict";
//登录页面控制器+++
app.controller('loginCtrl', function($scope, $http, $state, $timeout) {
    $scope.loginSubmit = function() {
        //发送请求验证用户名密码+++
		/*简写+++
		$http.post('/carrots-admin-ajax/a/login', 'name=' + $scope.username + '&pwd=' + $scope.password, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
		.then(function successCallback(xhr) {
		console.log('success code:' + xhr.data.code + '-message:' + xhr.data.message);
		}, function errorCallback(xhr) {
		console.log('connection error');
		});
		*/
		$http({
			method: 'POST',
			url: '/carrots-admin-ajax/a/login',
			data: 'name=' + $scope.username + '&pwd=' + $scope.password,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		})
		.then(function(xhr) {
			if (xhr.data.code == 0) {
                $scope.showValidation = false;
                $state.go('backstage', {
                    page: null,
                    size: null,
                    author: null,
                    startAt: null,
                    endAt: null,
                    type: null,
                    status: null
                }, {
                    reload: true
                });
            }
            else {
                $scope.message = xhr.data.message;
                //提示行显示+++
                $scope.showValidation = true;
                //延迟显示提示行+++
                $timeout.cancel($scope.timeout);
                $scope.timeout = $timeout(function() {
                    $scope.showValidation = false;
                }, 2000);
            }
			console.log('登录系统正常');
		}, function(xhr) {
            console.log('登录系统异常，请检查相关设置');
        });
    }
    //表单验证+++
    $scope.getError = function(error) {
        if (angular.isDefined(error)) {
            if ($scope.message == '用户不存在') {
                return "用户不存在";
            }
            else if ($scope.message == '密码错误') {
                return "密码错误";
            }
        }
    }
});