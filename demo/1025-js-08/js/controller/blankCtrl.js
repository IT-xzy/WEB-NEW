app.controller('blankCtrl', function($scope) {
//ng-value
    //例 1
    $scope.ex1 = 1;
    $scope.fnex1 = () => {
        $scope.ex1 += 1;
    }



    //例 2
    $scope.modelEx2_1 = 'ng-model';
    $scope.modelEx2_2 = 'ng-value';
    $scope.fnex2 = () => {
        //ng-model
        console.log('ng-model值为' + $scope.modelEx2_1)
        //ng-value
        console.log('ng-value值为' + $scope.modelEx2_2)
        //value
        console.log('value值为' + $("#ex2").val());
        console.log('value值为' + document.getElementById("ex2").value);
    }
    $scope.lists = [
        {id: 1, name: '选项1'},
        {id: 2, name: '选项2'},
        {id: 3, name: '选项3'}
    ];

    
    $scope.modelEx2_2plus = 1;
    $scope.fnex2plus = () => {
        //ng-model
        console.log('ng-model值为' + $scope.modelEx2_1plus)
        //ng-value
        console.log('ng-value值为' + $scope.modelEx2_2plus)
        //value
        console.log('value值为' + $("#ex2plus").val());
    }

    $scope.names = ['女装大佬', '伪娘', '大*萌妹'];  
    $scope.my = {favorite: '你猜'};

    
    //例 3
    $scope.modelEx3_1 = 1;
    $scope.modelEx3_2 = 1;
    $scope.fnex3_1 = () => {
        //ng-model
        console.log('ng-model值为' + $scope.modelEx3_1)
        console.log('ng-model值是否是数字' + angular.isNumber($scope.modelEx3_1));
        //value
        console.log('value值为' + $("#ex3_1").val());
        console.log('value值是否为数字' + typeof($("#ex3_1").val()));
    }
    $scope.fnex3_2 = () => {
        //ng-value
        console.log('ng-value值为' + $scope.modelEx3_2)
        console.log('ng-value值是否是数字' + angular.isNumber($scope.modelEx3_2));
        //value
        console.log('value值为' + $("#ex3_2").val());
        console.log('value值是否为数字' + typeof($("#ex3_2").val()));
    }




//ng-if
    //例 1
    $scope.ifEx4_1 = true;
    $scope.ifEx4_2 = true;
    $scope.ifEx4_3 = false;
});