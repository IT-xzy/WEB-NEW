"use strict";
//列表页控制器+++
app.controller('articleCtrl', function($scope, $http, $state, $stateParams, $filter) {
    //初始化列表数据+++
    $scope.loadLists = function() {
        //搜索框设置+++
        $scope.types = [{'id': 0, 'name': "首页banner"}, {'id': 1, 'name': "找职位banner"}, {'id': 2, 'name': "找精英banner"}, {'id': 3, 'name': "行业大图"}, {'id': null, 'name': "全部"}];
        $scope.status = [{'id': 1, 'name': "草稿"}, {'id': 2, 'name': "上线"}, {'id': null, 'name': "全部"}];
        $scope.dateOptionsFrom = {
            maxDate: new Date(),
            monthColumns: 4,
            showWeeks: false
        }
        $scope.dateOptionsTo = {
            maxDate: new Date(),
            monthColumns: 4,
            showWeeks: false
        }
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy-MM-dd', 'dd.MM.yyyy', 'shortDate', 'yyyy-MM-dd HH:mm:ss'];
        $scope.format = $scope.formats[1];
        $scope.popup1 = {
            opened: false
        };
        $scope.popup2 = {
            opened: false
        };
        $scope.open1 = function() {
            $scope.popup1.opened = true;
        };
        $scope.open2 = function() {
            $scope.popup2.opened = true;
        };
        //获取url参数+++
        let getParamsToInt = function(params) {
            return (params == null)?null:parseInt(params);
        }
        let sentParamsInIntPlus = function(params) {
            return (params == null)?null: params.valueOf() + 86399000;
        }
        let sentParamsInInt = function(params) {
            return (params == null)?null: params.valueOf();
        }
        $scope.modelTitle = $stateParams.title;
        $scope.modelAuthor = $stateParams.author;
        $scope.modelDateFrom = getParamsToInt($stateParams.startAt);
        $scope.modelDateTo = getParamsToInt($stateParams.endAt);
        $scope.modelType = getParamsToInt($stateParams.type);
        $scope.modelStatus = getParamsToInt($stateParams.status);
        //提交搜索，将参数保存在url中+++
        $scope.submitSearchForm = function() {
            $state.go('backstage.list', {
                page: 1,
                title: $scope.modelTitle,
                author: $scope.modelAuthor,
                startAt: sentParamsInInt($scope.modelDateFrom),
                endAt: ($scope.modelDateTo <= $scope.modelDateFrom)?sentParamsInIntPlus($scope.modelDateTo):sentParamsInInt($scope.modelDateTo),
                type: $scope.modelType,
                status: $scope.modelStatus
            }, {
                reload: true
            });
        }
        //清空搜索内容+++
        $scope.resetSearchForm = function(form) {
            $scope.modelTitle = null;
            $scope.modelAuthor = null;
            $scope.modelDateFrom = null;
            $scope.modelDateTo = null;
            $scope.modelType = null;
            $scope.modelStatus = null;
            $state.go('backstage.list', {
                page: 1,
                title: $scope.modelTitle,
                author: $scope.modelAuthor,
                startAt: $scope.modelDateFrom,
                endAt: $scope.modelDateTo,
                type: $scope.modelType,
                status: $scope.modelStatus
            }, {
                reload: true
            });
            form.$setPristine();
        }
        //获取列表+++
        $scope.getLists = function() {
            $http({
                method: 'GET',
                url: '/carrots-admin-ajax/a/article/search',
                params: {
                    page: $stateParams.page,
                    size: $stateParams.size,
                    title: $scope.modelTitle,
                    author: $scope.modelAuthor,
                    startAt: sentParamsInInt($scope.modelDateFrom),
                    endAt: sentParamsInInt($scope.modelDateTo),
                    type: $scope.modelType,
                    status: $scope.modelStatus
                },
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .then(function(xhr) {
                if (xhr.data.code == 0) {
                    console.log('数据获取正常');
                    //列表数据+++
                    $scope.lists = xhr.data.data.articleList;
                    //每页最大显示+++
                    $scope.itemsPerPage = xhr.data.data.size;
                    //获取总数+++
                    $scope.totalItems = xhr.data.data.total;
                    console.log("现在总数为：" + $scope.totalItems);
                    //当前页面+++
                    $scope.currentPage = xhr.data.data.page;
                }
            }, function() {
                console.log('数据获取异常，请检查相关设置');
            });
        }
        $scope.getLists();
        //拖拽列表+++
        $scope.cannotSort = false;
        $scope.sortableOptions = {
            'ui-preserve-size': true,
            stop: function(e, ui) {
                //console.log($scope.lists);
                window.sessionStorage.setItem('lock', JSON.stringify($scope.lists));
            }
        };
        //最大页码修改确认+++
        $scope.pageMaximum = function() {
            let tt=/^\d+$/g;
            if (tt.test($scope.maxSizeInput)) {
                $state.go("backstage.list", {
                    page: 1,
                    size: $scope.maxSizeInput
                }, {
                    reload: true
                });
            }
            else {
                $scope.popoverOpen = true;
            }
        };
        //翻页+++
        $scope.pageChange = function() {
            $state.go("backstage.list", {
                page: $scope.currentPage
            },{
                reload: true
            }
        )};
        //重置+++
        $scope.pageReset = function() {
            $state.go("backstage.list", {
                page: 1,
                size: 10
            },{
                reload: true
            }
        )};
        //上下线按钮显示+++
        $scope.lineStatus = function(list) {
            return (list.status == 1)?'上线':'草稿';
        }
        //上下线模态框bootbox+++
        $scope.offline = function(list) {
            bootbox.confirm({
                size: 'small',
                backdrop: true,
                closeButton: false,
                title: (list.status == 1)?'确认上线？':'确认下线？',
                message: (list.status == 1)?'上线后会显示在轮播图中':'下线后会存为草稿并从轮播图中删除',
                buttons: {
                    confirm: {
                        label: '是的',
                        className: 'btn btn-success'
                    },
                    cancel: {
                        label: '点错了',
                        className: 'btn btn-danger'
                    }
                },
                callback: function(result) {
                    if (result) {
                        let stateChange = function() {
                            if (list.status == 1) {
                                return 2;
                            }
                            else if (list.status == 2) {
                                return 1;
                            }
                        }
                        $http({
                            method: 'PUT',
                            url: '/carrots-admin-ajax/a/u/article/status',
                            data: 'id=' + list.id + '&status=' + stateChange(),
                            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                        })
                        .then(function(xhr) {
                            if (xhr.data.code == 0) {
                                console.log('上下线系统正常');
                                $state.reload('backstage.list');
                            }
                        }, function() {
                            console.log('上下线系统异常，请检查相关设置');
                        });
                    }
                    else {
                        console.log('已取消');
                    }
                }
            });
        }
        //删除条目+++
        $scope.deleteList = function (id) {
            bootbox.confirm({
                size: 'small',
                backdrop: true,
                closeButton: false,
                title: '确认删除？',
                message: '删除将不可恢复',
                buttons: {
                    confirm: {
                        label: '删除',
                        className: 'btn btn-danger'
                    },
                    cancel: {
                        label: '点错了',
                        className: 'btn btn-success'
                    }
                },
                callback: function(result) {
                    if (result) {
                        $http({
                            method: 'DELETE',
                            url: '/carrots-admin-ajax/a/u/article/' + id
                        })
                        .then(function(xhr) {
                            if (xhr.data.code == 0) {
                                console.log('删除系统正常');
                                $state.reload('backstage.list');
                            }
                        }, function() {
                            console.log('删除系统异常，请检查相关设置');
                        });
                    }
                    else {
                        console.log('已取消');
                    }
                }
            });
        }
        //编辑条目+++
        $scope.edit = function(id) {
            $http({
                method: 'GET',
                url: '/carrots-admin-ajax/a/article/' + id
            })
            .then(function(xhr) {
                if (xhr.data.code == 0) {
                    console.log('编辑系统正常');
                    window.sessionStorage.setItem('edit', JSON.stringify(xhr.data.data.article));
                    $state.go("backstage.add");
                }
            }, function() {
                console.log('编辑系统异常，请检查相关设置');
            });
        }
        //新增条目+++
        $scope.addNew = function() {
            window.sessionStorage.removeItem('edit');
            $state.go('backstage.add');
        }
    }    
});
