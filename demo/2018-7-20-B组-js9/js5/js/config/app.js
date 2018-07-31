
var myApp = angular.module('myApp', ["ui.router", "oc.lazyLoad"]);
myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        var _lazyLoad = function (loaded) {
            return function ($ocLazyLoad) {
                return $ocLazyLoad.load(loaded, {
                    serie: true
                })
            }
        };
        $urlRouterProvider.otherwise("/login");
        $stateProvider
            .state("login", {
                url: "/login",
                templateUrl: "views/login.html",
                controller: "loginController",
                controllerAs: 'vm',
                resolve: {
                    loadMyCtrl: _lazyLoad(['css/mycss/login.css', 'js/controller/login.js'])
                }
            })
            .state("list", {
                url: "/list",
                templateUrl: "views/list.html",
                controller: "listController",
                controllerAs: 'vm',
                resolve: {
                    loadMyCtrl: _lazyLoad(['css/mycss/list.css', 'js/controller/list.js'])
                }
            })
            .state("list.welcome", {
                url: "/welcome",
                templateUrl: "views/welcome.html",
            })
            .state("list.companyList", {
                url: "/companyList",
                templateUrl: "views/companyList.html",
                controller: "companyListController",
                controllerAs: 'vm',
                resolve: {
                    loadMyCtrl: _lazyLoad(['css/mycss/companyList.css', 'js/controller/companyList.js'])
                }
            })
            .state("list.article", {
                url: "/article",
                templateUrl: "views/article.html",
                controller: "articleController",
                controllerAs: 'vm',
                resolve: {
                    loadMyCtrl: _lazyLoad(['css/pagination.css', 'css/mycss/article.css', 'js/controller/article.js'])
                }
            })
            .state("list.articleDetail", {
                url: "/articleDetail?id",
                templateUrl: "views/articleDetail.html",
                controller: "articleDetailController",
                controllerAs: 'vm',
                resolve: {
                    loadMyCtrl: _lazyLoad(['css/mycss/articleDetail.css', 'js/controller/articleDetail.js'])
                }
            })
    }])
    .config(function httpConfig($httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/json';
    })
    .config(["$httpProvider", function ($httpProvider) {//拦截器
        $httpProvider.interceptors.push('myInterceptor');
    }]);;