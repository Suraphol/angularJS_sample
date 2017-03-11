angular.module('app',['customerModule']);

angular.module('app')
	.controller('loginController', function($scope){
		$scope.controllerName = 'loginController';
	});

angular.module('customerModule',[]);
angular.module('customerModule')
	.controller('customerController', function($scope){
		$scope.controllerName = 'customerController';
	})