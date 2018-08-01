angular.module("myApp")
    .controller("listController", function ($scope, $http, $state, sidebar, $rootScope) {
        $scope.title = '点击展开';
        $scope.text = '这里是内部的内容。';
        $rootScope.askShow = false; //弹窗默认隐藏
        $rootScope.cancleButton = true //取消按钮默认显示
        $scope.records = sidebar; //渲染菜单数据
        $scope.toggle = function (index) {
            var x = index;
            $scope.records[index].show = !$scope.records[index].show; //二级菜单弹出
            $scope.records[index].change = true; //所点击的一级菜单变色
            for (let i = 0; i < 3; i++) { //循环数组
                if (i !== index) { //非当前点击的
                    $scope.records[i].show = false; //二级菜单收回，
                    $scope.records[i].change = false; //一级菜单恢复颜色
                };
            };
            $scope.grey = function () { //点击右边
                $scope.records[x].change = false; //一级菜单恢复颜色
            };
            $scope.childLink = function (link, index) {
                $state.go(link); //跳转对应链接
                $scope.records[x].change = false; //一级菜单恢复颜色
                $(".li-style").removeClass('link-white'); //所有二级菜单失去颜色
                $scope.records[x].child[index].show2 = true; //所点击的二级菜单变色
            };

        };
        $scope.logout = function () { //点击登出
            $http({
                method: "POST",
                url: "/carrots-admin-ajax/a/logout",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            }).then(function successCallback(response) {
                console.log(response)
                if (response.data.code === 0) { //如果正确，跳转登录页
                    $state.go('login');
                }
            });
        };



    });