angular.module("myApp")
    .controller("listController", function ($scope, $state, A) {
      
        $scope.A = A; //方法，赋值  



        $scope.Arr0 = [
            {name:'Tom', age:20}, 
            {name:'Tom Senior', age:50}, 
            {name:'May', age:21}, 
            {name:'Jack', age:20},
            {name:'Nancy', age:25}
        ]
      
        $scope.Arr = [
            {name:'新垣结衣', age:18}, 
            {name:'石原里美', age:23}, 
            {name:'桥本环奈', age:21}, 
            {name:'桥本爱', age:22}, 
            {name:'长泽雅美', age:22}
        ]

        myApp.filter('myFilter', function () {
           
                return x.age === 20;
            
            
        });


       $scope.myComparator = function (expected, actual) {
         return angular.equals(expected.toLowerCase(), actual.toLowerCase());
      }

      $scope.goods = [
                    {number:"apple",age:18,inTime:1488785356895,name:"新垣结衣"},  //时间秒数由 new Date().getTime();获得       
                    {number:"blue",age:23,inTime:1488685355895,name:"石原里美"},       
                   {number:"cat",age:25,inTime:1468785355895,name:"桥本爱"},
                    {number:"neko",age:22,inTime:1482785355895,name:"桥本环奈"}
                ]
                ;
        


        $scope.toggle = function (index) {
            // $(".arrow").eq(index).toggleClass("arrow2");
            // $scope.choose = !$scope.choose;
            // $(".nav-link").eq(index).toggleClass("link-white");
            // $(".navbar-child").eq(index).slideToggle();
            for (let i = 0; i < 3; i++) {
                if (i == index) {
                    $scope.records[i].show = !$scope.records[i].show;
                } else {
                    // $(".navbar-child").eq(i).slideUp();
                    // $(".arrow").eq(i).removeClass("arrow2");
                    // $(".nav-link").eq(i).removeClass("link-white");
                    $scope.records[i].show = false;
                }
            }
        };
        $scope.logout = function () {
            $state.go('login');
        };
        $scope.myFilter = function (item) {
            return item.age === 20;
        };
        $scope.myArr = [{
            name: 'Tom',
            age: 20
        }, {
            name: 'Tom Senior',
            age: 50
        }, {
            name: 'May',
            age: 21
        }, {
            name: 'Jack',
            age: 20
        }, {
            name: 'Alice',
            age: 22
        }];


            $scope.isAsc = false; //定义isAsc变量为false，默认升序;
                $scope.sort = function(){
                    $scope.isAsc = !$scope.isAsc; //升降切换
                    console.log($scope.isAsc)
            }




        $scope.records = [{
                show: false,
                father: "信息管理",
                child: [
                    "公司列表",
                    "职位列表"
                ],
            },
            {
                show: false,
                father: "Article管理",
                child: {
                    1: "Article列表",
                    2: "文章管理",
                    3: "文章管理"
                }
            },
            {
                show: false,
                father: "用户管理",
                child: [
                    "用户列表",
                ]
            }
        ];
    });