"use strict";
//后台页面控制器+++
app.controller('backstageCtrl', function($scope, $stateParams, $state, $http) {
    //初始化风琴菜单+++
    $scope.loadAccordion = function() {
        //定义判断菜单展开状态函数+++
        let menuJudge = function(menu) {
            if (menu == '0') {
                return false;
            }
            else {
                return true;
            }
        }
        let m1 = window.sessionStorage.getItem('m1');
        let m2 = window.sessionStorage.getItem('m2');
        let m3 = window.sessionStorage.getItem('m3');
        let m4 = window.sessionStorage.getItem('m4');
        let menu1 = menuJudge(m1);
        let menu2 = menuJudge(m2);
        let menu3 = menuJudge(m3);
        let menu4 = menuJudge(m4);
        //侧边菜单列表+++
        $scope.menus = [
            {
                heading: {
                    name: '欢迎页',
                    status: menu1
                }
            },
            {
                heading: {
                    name: '信息管理',
                    status: menu2
                },
                submenus: [{name: '公司信息', id: 'backstage.blank'}, {name: '职位信息', id: 'backstage.blank'}]
            },
            {
                heading: {
                    name: '内容管理',
                    status: menu3
                },
                submenus: [{name:  'Article管理', id: 'backstage.list'}]
            },
            {
                heading: {
                    name: '后台管理',
                    status: menu4
                },
                submenus: [{name: '账号管理', id: ''}, {name: '角色管理', id: ''}, {name: '密码修改', id: ''}, {name: '模块管理', id: ''}]
            }
        ];
        //响应式菜单展开/收起状态+++
        $scope.isNavCollapsed = true;
        //风琴菜单展开状态存储+++
        $scope.menuCollapsed = function(index) {
            if ($scope.menus[index].heading.status) {
                switch (index) {
                    case 0: window.sessionStorage.setItem('m1', '0');break;
                    case 1: window.sessionStorage.setItem('m2', '0');break;
                    case 2: window.sessionStorage.setItem('m3', '0');break;
                    case 3: window.sessionStorage.setItem('m4', '0');break;
                } 
            }
            else {
                switch (index) {
                    case 0: window.sessionStorage.setItem('m1', '1');break;
                    case 1: window.sessionStorage.setItem('m2', '1');break;
                    case 2: window.sessionStorage.setItem('m3', '1');break;
                    case 3: window.sessionStorage.setItem('m4', '1');break;
                } 
            }
        }
    }
    //登出+++
    $scope.logOut = function() {
        $http({
            method: 'POST',
            url: '/carrots-admin-ajax/a/logout'
        })
        .then(function(xhr) {
            if (xhr.data.code == 0) {
                console.log("注销系统正常");
                $state.go('login');
            }
        }, function() {
            console.log("注销系统异常，请检查相关设置");
        });
    }
});