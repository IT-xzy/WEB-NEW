"use strict";
//创建一个app，注入模块+++
let app = angular.module('myApp', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'ui.sortable']);
//路由跳转+++
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', 'login');
    //路由配置
    $stateProvider
    .state("login", {//登陆页+++
        url: '/login',
        templateUrl: 'template/login.html',
        controller: 'loginCtrl'
    })
    .state("backstage", {//后台页+++
        url: '/backstage?page&size&title&author&startAt$endAt&type&status',
        templateUrl: 'template/backstage.html',
        controller: 'backstageCtrl'
    })
    .state("backstage.list", {//Article列表页+++
        url: '/article/list',
        templateUrl: 'template/article-list.html',
        controller: 'articleCtrl'
    })
    .state("backstage.add", {//Article添加项目页+++
        url: '/article/list/add',
        templateUrl: 'template/add.html',
        controller: 'addCtrl'
    })
    .state("backstage.blank", {//空+++
        url: '/article/blank',
        templateUrl: 'template/blank.html',
        controller: 'blankCtrl'
    })
}]);