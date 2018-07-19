angular.module("myApp")
    .filter("typeFilter", function () {
        return function (type) {
            switch (type) {
                case 0:
                    return "首页banner";
                    break;
                case 1:
                    return "找职位banner ";
                    break;
                case 2:
                    return "找精英banner";
                    break;
                case 3:
                    return "行业大图";
                    break;
            }
        }
    })
    .filter("statusFilter", function () {
        return function (status) {
            switch (status) {
                case 1:
                    return "草稿";
                    break;
                case 2:
                    return "上线";
            }
        }
    })
    .filter("upFilter", function () {
        return function (status) {
            switch (status) {
                case 1:
                    return "上线";
                    break;
                case 2:
                    return "下线";
            }
        }
    })
    .filter("size", function () {
        return function (imgSize) {
            if (imgSize <= 1024 * 1024) { //小于1M
                imgSize = Math.round((imgSize / 1024) * 100) / 100 + "KB"; //四舍五入保留2位小数
            } else { //大于1M
                imgSize = Math.round((imgSize / 1024 / 1024) * 100) / 100 + "M"; //四舍五入保留2位小数
            };
            return  imgSize;
        }
    })