angular.module("myApp")
    .controller("companyListController", function ($scope,companyOption,rowOption) {
        $scope.option = companyOption;
        $scope.row = rowOption;
        $scope.post = undefined;
    })