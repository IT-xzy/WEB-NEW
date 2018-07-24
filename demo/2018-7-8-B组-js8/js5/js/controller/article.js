angular.module("myApp")
    .controller("articleController", function ($scope, $state, $http, typeOption, statusOption, onOff, $rootScope) {
        $scope.parentName = '阿爸';
        $scope.scopeName = '阿珍';
        $scope.expanders = [
            {title: 'click me', text: 'one click'},
            {title: 'click me two', text: 'two click'},
            {title: 'click me three', text: 'three click'}];

        $scope.name = '阿东'; 
    })