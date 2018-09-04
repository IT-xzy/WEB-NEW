var myModule = angular.module('MyModule',[]);
//link用法
myModule.directive('hello',function () {
	return{
		restrict: 'E',
		template: '<div>Hello Angular!</div>',
		replace: true,
		link: function(scope, el, attrs, controller){
			el.on('mouseenter',function(){
				console.log('<hello>...link...');
			})
		}
	}
});

//compile用法
myModule.directive('alotofhello',function(){
	return{
		restrict: 'A',
		compile:function(el, attrs, controller){
			console.log('指令编译...');
			var tpl = el.children().clone();
			console.log(tpl);
			for(var i = 0; i < attrs.alotofhello - 1; i++){
				el.append(tpl.clone());
			}
			return function(scope, el, attrs, controller){
				console.log('指令链接...');
			}
		},
		//与link排斥
		// link:function(){
		// 	console.log('这是link函数...');
		// }
	};
});

//执行实例次数
myModule.directive('repeater',function(){
	return{
		restrict: 'A',
		compile: function(el, attrs, controller){
			console.log('repeat...compile...');
			var tpl = el.children().clone();
			for(var j = 0; j < attrs.repeater - 1; j++){
				el.append(tpl.clone());
			}
			return function(scope, el, attrs, controller){
				console.log('repeat...link...');
			}
		}
	}
})

