angular.module('myApp')
    .factory('myInterceptor', ["$rootScope", function ($rootScope) {
        var timestampMarker = {
            request: function (config) { 
                $rootScope.loading = true;
                return config;
            },
            response: function (response) { 
                $rootScope.loading = false;
                return response;
            }
        };
        return timestampMarker;
    }])
    .factory('date', function () {
        return {
            date: function () {
                $('.form_datetime').datetimepicker({ //日历
                    format: 'yyyy-mm-dd', //显示格式
                    todayHighlight: 1, //今天高亮
                    minView: "month", //设置只显示到月份
                    language: "zh-CN",
                    startView: 2,
                    forceParse: 0,
                    showMeridian: 1,
                    autoclose: 1 //选择后自动关闭
                });
            }
        }
    })
    .factory('adminService', function ($http, pathProject) {
        return {
            login: function (params) {
                return $http({
                    method: 'post',
                    url: pathProject.login_url,
                    params: params
                })
            },
            logout: function () {
                return $http.post(pathProject.logout_url)
            },
        }
    })
    //上传文件
    .factory('uploadService', function ($http, pathProject) {
        return {
            uploadFile: function (data) {
                return $http({
                    method: 'post',
                    url: pathProject.upload_url,
                    data: data,
                    headers: {
                        'Content-Type': undefined
                    },
                });
            }
        }
    })
    //弹窗询问
    .factory('ask', function ($rootScope) {
        return {
            cancle: function () {
                $rootScope.cancle = function () { //点击取消弹窗消失
                    $rootScope.askShow = false;
                }
            },
            confirm: function () {
                $rootScope.confirm = function () { //点击确定弹窗消失
                    $rootScope.askShow = false;
                }
            },
            showText: function (isAsk, text, isCancle) {
                $rootScope.askShow = isAsk; //弹窗
                $rootScope.askText = text;
                $rootScope.cancleButton = isCancle; //取消按钮
            }
        }
    })
    // 信息管理
    .factory('ArticleManagementService', function ($http, pathProject) {
        return {
            //获取
            getArticleList: function (params) {
                return $http({
                    method: 'get',
                    url: pathProject.getArticlelist_url,
                    params: params
                });
            },
            //新增
            addArticle: function (params) {
                return $http({
                    method: 'post',
                    url: pathProject.addArticle_url,
                    params: params
                });
            },
            //删除
            delArticle: function (id) {
                return $http.delete(pathProject.delArticle_url(id));
            },
            //获取单个
            getArticle: function (id) {
                return $http.get(pathProject.getArticle_url(id));
            },
            //编辑
            editArticle: function (id, params) {
                return $http({
                    method: 'put',
                    url: pathProject.editArticle_url(id),
                    params: params
                });
            },
            //修改article的上架/下架
            changeArticleStatus: function (params) {
                return $http({
                    method: 'put',
                    url: pathProject.changeArticleStatus_url,
                    params: params
                });
            }
        }
    })