"use strict";
//新增/编辑页面控制器+++
app.controller('addCtrl', function($scope, $http, $state, $timeout) {
    $scope.loadEdit = function() {
        let editLists = JSON.parse(window.sessionStorage.getItem('edit'));
        //编辑+++
        if (editLists != null) {
            //id\status不显示，status\createAt必须
            $scope.modelEditId = editLists.id;
            $scope.modelEditIndustry = editLists.industry;
            $scope.modelEditStatus = editLists.status;
            $scope.modelEditCreateAt = editLists.createAt;
            //以下参数均必须
            $scope.modelEditTitle = editLists.title;
            $scope.modelEditType = editLists.type;
            $scope.modelEditUrl = editLists.url;
            $scope.modelEditImg = editLists.img;   
            //content显示，非必需
            $scope.modelEditContent = editLists.content;
        }
        //新增+++
        else {
            $scope.modelEditCreateAt = new Date().valueOf();
            $scope.modelEditType = 0;
            $scope.modelEditIndustry = 0;
        }

        $scope.types = [
            {'id': 0, 'name': "首页banner"},
            {'id': 1, 'name': "找职位banner"},
            {'id': 2, 'name': "找精英banner"},
            {'id': 3, 'name': "行业大图"}
        ];
        $scope.status = [
            {'id': 1, 'name': "草稿"},
            {'id': 2, 'name': "上线"}
        ];
        $scope.industries = [
            {'id': 0, 'name': "移动互联网"},
            {'id': 1, 'name': "电子商务"},
            {'id': 2, 'name': "企业服务"},
            {'id': 3, 'name': "O2O"},
            {'id': 4, 'name': "教育"},
            {'id': 5, 'name': "金融"},
            {'id': 6, 'name': "游戏"},
        ];
        //判断显示industry+++
        $scope.type3 = function() {
            return ($scope.modelEditType == 3)?true:false;
        }
        //上下线+++
        $scope.offline = function() {
            $scope.modelEditStatus = 1;
        }
        $scope.online = function() {
            $scope.modelEditStatus = 2;
        }
        //提交编辑+++
        $scope.editSubmit = function(id) {
            if ($scope.modelEditImg == null) {
                ($scope.modelEditStatus == 2)?($scope.popoverOpen1 = true):($scope.popoverOpen2 = true);
            }
            else {
                //编辑+++
                $scope.modelEditIndustry = ($scope.modelEditIndustry == null)?'':$scope.modelEditIndustry;
                if (editLists != null) {
                    $http({
                        method: 'PUT',
                        url: '/carrots-admin-ajax/a/u/article/' + id,
                        data: 'title=' + $scope.modelEditTitle
                        + '&status=' + $scope.modelEditStatus
                        + '&img=' + $scope.modelEditImg
                        + '&url=' + $scope.modelEditUrl
                        + '&createAt=' + $scope.modelEditCreateAt
                        + '&type=' + $scope.modelEditType
                        + '&content=' + $scope.modelEditContent
                        + '&industry=' + $scope.modelEditIndustry,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                    .then(function(xhr) {
                        if (xhr.data.code == 0) {
                            console.log("编辑系统正常");
                            $state.go('backstage.list');
                        }
                    }, function() {
                        console.log("编辑系统异常，请检查相关设置");
                    });
                }
                //新增+++
                else {
                    $http({
                        method: 'POST',
                        url: '/carrots-admin-ajax/a/u/article',
                        data: 'title=' + $scope.modelEditTitle
                        + '&status=' + $scope.modelEditStatus
                        + '&img=' + $scope.modelEditImg
                        + '&url=' + $scope.modelEditUrl
                        + '&createAt=' + $scope.modelEditCreateAt
                        + '&type=' + $scope.modelEditType
                        + '&content=' + $scope.modelEditContent
                        + '&industry=' + $scope.modelEditIndustry,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                    .then(function(xhr) {
                        if (xhr.data.code == 0) {
                            console.log("新增系统正常");
                            $state.go('backstage.list');
                        }
                    }, function() {
                        console.log("新增系统异常，请检查相关设置");
                    });
                }
            }
        }
        //返回+++
        $scope.back = function() {
            $state.go('backstage.list');
        }
        //上传收起+++
        $scope.isUploadCollapsed = true;
        //进度条默认值+++
        $scope.progress = 0;
        //清空预览图和图片信息以及进度条+++
        $scope.clear = function() {
            $scope.progress = 0;
            $scope.file = null;
            $scope.modelEditImg = null;
            let str = "<p>未选择文件</p>";
            let imgFile = "./img/loading.gif";
            $("#preview_text").html(str);
            $("#preview").attr('src', imgFile);
        }
        //判断并显示预览图和图片信息+++
        let showPreview = function() {
            let mark = window.sessionStorage.getItem('DropOrClick');
            switch (mark) {
                case 'drop': $scope.file = $scope.dropFile; break;
                case 'click': $scope.file = $scope.clickFile; break;
            }
            //显示文件名和大小+++
            if ($scope.file != null) {
                let filename = $scope.file.name;
                let filesize = Math.floor(($scope.file.size) / 1024);
                let str = "<p>图片名称：" + filename + "</p><p>图片大小：" + filesize + "KB</p>";
                $("#preview_text").html(str);
                //图片预览+++
                let fileReader = new FileReader();
                let imgFile;
                fileReader.onload = function(e) {
                    imgFile = e.target.result
                    $("#preview").attr('src', imgFile);
                }
                fileReader.readAsDataURL($scope.file);
            }
            else {
                scope.clear();
            }
        }
        //拖拽上传+++
        $(function() {
            $(document).on({
                dragleave: function(e) {
                    e.preventDefault();
                },
                drop: function(e) {
                    e.preventDefault();
                },
                dragenter: function(e) {
                    e.preventDefault();
                },
                dragover: function(e) {
                    e.preventDefault();
                }
            });
            let box = document.getElementById('dropArea');
            box.addEventListener("drop", function(e) {
                e.preventDefault();
                $scope.dropFile = e.dataTransfer.files[0];

                if ($scope.dropFile.length == 0) {
                    return false;
                }
                if ($scope.dropFile.type.indexOf('image') === -1) {
                    alert("请拖入图片");
                    return false;
                }
                window.sessionStorage.setItem('DropOrClick', 'drop');
                showPreview();
                console.log('已丢下');
            }, false);
        });
        //按钮上传+++
        $scope.click = function() {
            $scope.clickFile = $('#uploadImage').get(0).files[0];
            window.sessionStorage.setItem('DropOrClick', 'click');
            showPreview();
            console.log('已改变');
        }
        //确认上传按钮+++
        $scope.upload = function() {
            $scope.progress = 0;
            let formData = new FormData();
            formData.append('file', $scope.file);
            $http({
                method: 'POST',
                url: '/carrots-admin-ajax/a/u/img/task',
                data: formData,
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            })
            .then(function(xhr) {
                if (xhr.data.code == 0) {
                    console.log("上传系统正常");
                    let progressPlus = function() {
                        if ($scope.progress < 100) {
                            $scope.progress += 1;
                            $timeout(function() {
                                progressPlus();
                            }, 10);
                        }
                        if ($scope.progress < 33) {
                            $scope.type = 'danger';
                        }
                        else if ($scope.progress < 66) {
                            $scope.type = 'warning';
                        }
                        else {
                            $scope.type = 'success';
                        }
                    };
                    progressPlus();
                    $scope.modelEditImg = xhr.data.data.url;
                }
            }, function() {
                $scope.popoverOpen = true;
                console.log("上传系统异常，请检查相关设置")
            });
        }
    }
});