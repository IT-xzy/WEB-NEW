angular.module("myApp")
    .controller("articleDetailController", function ($scope, ask, uploadService, ArticleManagementService, $rootScope, $state, typeOption, companyOption) {
        // var fileInput = document.getElementById('image-file'), //图片选择节点
        //     preview = document.getElementById('image-preview'); //图片显示节点    
        // // ask.cancle() //点击取消弹窗消失    
        // var vm = this;
        // vm.params = $state.params;
        // console.log(vm.params);
        // //富文本 
        // var E = window.wangEditor;
        // var editor = new E('#editor');
        // // editor.config.hideLinkImg = true;
        // editor.create();
        // vm.type = typeOption; //渲染类型下拉列表数据
        // vm.option = companyOption; //渲染公司下拉列表数据
        // vm.params.industry = undefined; //公司默认选项为全部
        // vm.params.type = undefined; //类型默认选项为全部
        // //点击编辑过来的
        // if (vm.params.id) {
        //     vm.myTitle = "编辑Article"; //改变顶部标题
        //     ArticleManagementService.getArticle(vm.params.id).then(function (res) {
        //         console.log(res);
        //         vm.params = res.data.data.article;
        //         editor.txt.html(vm.params.content); //说明
        //         console.log(vm.params);
        //         vm.upLoading = function () { //上线
        //             vm.params.industry = (vm.params.type === 3) ? vm.params.industry : undefined; //如果是行业大图。公司必须选择
        //             vm.params.content = editor.txt.html(); //说明
        //             vm.params.status = 2; //上线
        //             vm.hint = "上线成功";
        //             ask.showText(true, "确定上线？", true);
        //             $rootScope.confirm = function () { //点击确定
        //                 console.log(vm.params);
        //                 ArticleManagementService.editArticle(vm.params.id, vm.params).then(function (res) {
        //                     if (res.data.code === 0) {
        //                         $state.go("list.article"); //返回article
        //                         $rootScope.askText = vm.hint;
        //                         $rootScope.cancleButton = false; //取消按钮消失
        //                         ask.confirm(); //点击确定弹窗消失
        //                     } else {
        //                         $rootScope.askText = res.data.message;
        //                         ask.confirm();
        //                     }
        //                 })
        //             };
        //         };
        //         //存入草稿
        //         vm.downLoading = function () {
        //             vm.params.industry = (vm.params.type === 3) ? vm.params.industry : undefined; //如果是行业大图。公司必须选择
        //             vm.params.content = editor.txt.html();
        //             vm.params.status = 1; //存储
        //             vm.hint = "储存成功";
        //             console.log(vm.params)
        //             ask.showText(true, "确定存储为草稿？", true);
        //             // $rootScope.askShow = true; //弹窗出现
        //             // $rootScope.askText = "确定存储为草稿？";
        //             // $rootScope.cancleButton = true;
        //             $rootScope.confirm = function () { //点击确定
        //                 ArticleManagementService.editArticle(vm.params.id, vm.params).then(function (res) {
        //                     if (res.data.code === 0) {
        //                         $state.go("list.article"); //返回article
        //                         $rootScope.askText = vm.hint;
        //                         $rootScope.cancleButton = false; //取消按钮消失
        //                         ask.confirm(); //点击确定弹窗消失
        //                     } else {
        //                         $rootScope.askText = res.data.message;
        //                         ask.confirm(); //点击确定弹窗消失
        //                     }
        //                 })
        //             };
        //         }
        //     })
        // } else { //新增
        //     vm.myTitle = "新增Article"; //改变顶部标题
        //     vm.upLoading = function () { //上线
        //         console.log(vm.params);
        //         vm.params.industry = (vm.params.type === 3) ? vm.params.industry : undefined; //如果是行业大图。公司必须选择
        //         vm.params.content = editor.txt.html();
        //         vm.params.status = 1; //存储
        //         vm.hint = "上线成功";
        //         console.log(vm.params)
        //         ask.showText(true, "确定上线？", true);
        //         // $rootScope.askShow = true; //弹窗出现
        //         // $rootScope.askText = "确定上线？";
        //         // $rootScope.cancleButton = true;
        //         $rootScope.confirm = function () { //点击确定
        //             ArticleManagementService.addArticle(vm.params).then(function (res) {
        //                 if (res.data.code === 0) {
        //                     $state.go("list.article"); //返回article
        //                     $rootScope.askText = vm.hint;
        //                     $rootScope.cancleButton = false; //取消按钮消失
        //                     ask.confirm(); //点击确定弹窗消失
        //                 } else {
        //                     $rootScope.askText = res.data.message;
        //                     ask.confirm(); //点击确定弹窗消失
        //                 }
        //             })
        //         };
        //     };
        //     //存入草稿
        //     vm.downLoading = function () { //存储
        //         vm.params.industry = (vm.params.type === 3) ? vm.params.industry : undefined; //如果是行业大图。公司必须选择
        //         vm.params.content = editor.txt.html();
        //         vm.params.status = 1; //存储
        //         vm.hint = "储存成功";
        //         console.log(vm.params)
        //         // $rootScope.askShow = true; //弹窗出现
        //         // $rootScope.askText = "确定存储为草稿？";
        //         // $rootScope.cancleButton = true;
        //         ask.showText(true, "确定存储为草稿？", true);

        //         $rootScope.confirm = function () { //点击确定
        //             ArticleManagementService.addArticle(vm.params).then(function (res) {
        //                 if (res.data.code === 0) {
        //                     $state.go("list.article"); //返回article
        //                     $rootScope.askText = vm.hint;
        //                     $rootScope.cancleButton = false; //取消按钮消失
        //                     ask.confirm(); //点击确定弹窗消失
        //                 } else {
        //                     $rootScope.askText = res.data.message;
        //                     ask.confirm(); //点击确定弹窗消失
        //                 }
        //             })
        //         };
        //     };
        // };
        // //上传图片
        // vm.infor = {
        //     chooseImg: false, //操作栏默认隐藏
        //     isAble: false, //上传按钮恢复颜色可用
        //     isShow: false, //进度条默认恢复
        //     imgName: "", //图片名为空
        //     imgSize: "", //图片尺寸位空
        //     imgTip: "请选择1M以内文件" //提示
        // };
        // vm.del = function () { //点击删除
        //     preview.src = undefined //删除图片
        //     vm.infor.chooseImg = false; //隐藏操作栏
        //     vm.infor.isAble = false; //上传按钮恢复颜色可用
        //     vm.infor.isShow = false; //进度条恢复
        //     vm.infor.imgName = ""; //图片名为空
        //     vm.infor.imgSize = ""; //图片尺寸位空
        //     vm.infor.imgTip = "已删除"; //提示已删除
        // }
        // //判断浏览器是否支撑FileReader
        // if (typeof FileReader === 'undefined') { //如不支持
        //     vm.imgTip = "抱歉，你的浏览器不支持 FileReader";
        //     fileInput.setAttribute('disabled', 'disabled');
        // } else { //如支持
        //     //上传图片监听change事件:   
        //     $("#image-file").on('change', function () {
        //         vm.params.img = undefined //点击选择图片重置图片为undefined
        //         var file = fileInput.files[0];
        //         console.log(file)
        //         if (!fileInput.value) { //如果没选择文件
        //             $scope.$apply(function () {
        //                 vm.infor.imgTip = "未选择图片"
        //             })
        //             return false;
        //         } else if (fileInput.value && !/image\/\w+/.test(file.type)) { //如果选择了且选择文件格式不对
        //             $scope.$apply(function () {
        //                 vm.infor.imgTip = '不是有效的图片文件!'
        //             })
        //             return false;
        //         } else { //如果选择了正确格式文件
        //             $scope.$apply(function () {
        //                 vm.infor.imgTip = "选择成功";
        //                 vm.infor.isAble = false; //上传按钮恢复颜色可用
        //                 vm.infor.isShow = false; //进度条恢复
        //             })
        //             var reader = new FileReader(); //创建一个FileReader接口
        //             console.log(reader);
        //             //将文件以Data URL形式读入页面
        //             reader.readAsDataURL(file); //FileReader的方法，把图片转成base64
        //             reader.onprogress = function (e) { //本地上传过程
        //                 var line = e.loaded / e.total * 100; //本机上传成功100% 
        //                 if (line === 100) { //如果本地上传成功
        //                     reader.onload = function (e) { //成功读取
        //                         preview.src = e.target.result; //显示重新选择的图片
        //                         $scope.$apply(function () {
        //                             vm.infor.chooseImg = true; //操作栏显示
        //                             vm.infor.imgName = file.name; //显示图片名
        //                             vm.infor.imgSize = file.size; //显示图片大小
        //                         });
        //                         if (file.size > 1024 * 1024) {
        //                             $scope.$apply(function () {
        //                                 vm.infor.imgTip = "文件过大，请重新选择";
        //                                 vm.infor.isAble = true; //上传按钮半透明 不可用
        //                             })
        //                         } else {
        //                             vm.up = function () { //点击上传
        //                                 vm.infor.isShow = true; //进度条生效 
        //                                 vm.infor.isAble = true; //上传按钮半透明 不可用 
        //                                 //以下为像后台提交图片数据
        //                                 var formdata = new FormData();
        //                                 formdata.append("file", file); // file中包含用户所选择的文件
        //                                 uploadService.uploadFile(formdata).then(function (res) { //成功
        //                                     console.log(res.data);
        //                                     if (res.data.code == 0) { //请求成功
        //                                         vm.params.img = res.data.data.url;
        //                                         console.log(vm.params)
        //                                         vm.infor.imgTip = "上传成功";
        //                                     }
        //                                 })
        //                             }
        //                         }
        //                     };
        //                 }
        //             };
        //         }
        //     });
        // }
    })