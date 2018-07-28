angular.module("myApp")
    .controller("articleController", function ($timeout, ArticleManagementService, date, ask, $state, $scope, $http, typeOption, statusOption, onOff, $rootScope) {
        var vm = this;
        vm.text = "111"
        vm.text2 = "text2"
        // $scope.$apply(function(){
        //     console.log(vm.text)
        // })
        $scope.$watch('vm.text', function (newValue, oldValue) {
            console.log("新值" + newValue, "旧值" + oldValue)
            console.log(vm.text)
        });
        vm.getMessage = function () {
            setTimeout(function () {
                $scope.$apply(function () {
                vm.message = '2秒后显示';
                console.log('message:' + vm.message);
                })
            }, 2000);
        }
        vm.getMessage2 = function () {
            $timeout(function () {
                vm.message2 = '2秒后显示';
                console.log('message2:' + vm.message2);
            }, 2000, true);
        }
    //    vm.data.name = 'htf';

    //     $scope.$watch('data', function (newValue, oldValue) {
    //         if (newValue === oldValue) {
    //             return;
    //         }
    //         vm.updated++; 
    //     }, true);

    })