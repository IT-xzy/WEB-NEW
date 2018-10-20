/*------------------- Constant -------------------*/
var app = angular.module('myApp',[]);
app.constant('key1','123')	//值为字符串
	.constant('key2',{'name':'Tom','age':'3','sex':'male'})  //值为对象
	//constant值不可修改
	// .constant('key1','234')
	.controller('constantCtrl',function($scope,key1,key2){
		$scope.firstKey = '';
		$scope.secondKey = '';
		$scope.key1 = function(){
			$scope.firstKey = key1;
		}
		$scope.key2 = function(){
			$scope.secondKey = key2;
		}
	})
	.value('key3','666')  
	//value值可以修改
	.value('key3','999')   
	.controller('valueCtrl',function($scope,key3){
		$scope.thirdKey = '';
		$scope.key3 = function(){
			$scope.thirdKey = key3;
		}
	});
	//constant可注入config
app.config(function(key1){
		console.log(key1);
	})
	// value不可注入config
	// .config(function(key3){
	// 	console.log(key3);
	// })

/*----------------------- Filter ---------------------*/

app.controller('filterCtrl',function($scope){
	$scope.people = [
		{'name':'Ace','birthDate':'723534235230','sex':'男','height':'1.883','blood':'A','money':'648','merry':'1'},
		{'name':'Tracy','birthDate':'891566546132','sex':'女','height':'1.655','blood':'O','money':'128','merry':'0'},
		{'name':'Jhon','birthDate':'838465431654','sex':'男','height':'1.764','blood':'A','money':'328','merry':'0'},
		{'name':'Black','birthDate':'740465124864','sex':'男','height':'1.836','blood':'B','money':'996','merry':'1'},
		{'name':'Kimi','birthDate':'801513241656','sex':'男','height':'1.722','blood':'AB','money':'256','merry':'0'},
		{'name':'Helen','birthDate':'764546465465','sex':'女','height':'1.687','blood':'O','money':'196','merry':'1'}
	];
	//在controller方法内定义一个过滤方法
	$scope.merryFilter = function(obj){
		if(obj.merry == 1){
			return true;
		}
		return false;
	}
});
	//自定义filter
app.filter('merry',function(){
	return function(merry){
		switch(merry){
			case '0' :
				return '否';
				break;
			case '1' :
				return '是';
				break;
		}
	}
})