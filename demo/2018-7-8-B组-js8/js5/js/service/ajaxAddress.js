
angular.module("myApp")
    .factory('pathProject', function () {
        return {
            //上传图片接口
            upload_url: function () {
                return "/a/u/img/3"
            },
            //Article管理
            //Article列表接口
            getArticlelist_url: "/a/article/search",
            // 获取article
            getArticle_url: function (id) {
                return "/a/article/" + id;
            },
            // 新增article
            addArticle_url: "/a/u/article",
            // 删除article
            delArticle_url: function (id) {
                return "/a/u/article/" + id;
            },
            // 编辑article
            editArticle_url: function (id) {
                return "/a/u/article/" + id;
            },
            //修改article的上架/下架
            changeArticleStatus_url: function (id, status) {
                return "/a/u/article/status?id=" + id + "&status=" + status;
            }
        }
    });