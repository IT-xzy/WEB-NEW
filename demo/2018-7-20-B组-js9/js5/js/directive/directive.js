angular.module('myApp')
    .directive("askAlert", function () {
        return {
            restrict: 'EAC',
            templateUrl: 'views/alert.html',
            controller: function (ask) {
                ask.cancle()
            }
        }
    })