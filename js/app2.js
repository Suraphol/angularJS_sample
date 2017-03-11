angular.module('app',['ngRoute'])
	.controller('homeController',function($scope){
		$scope.controllerName = 'This is homeController';
	})

	.controller('customerController',function($scope, $http){
		$scope.controllerName = 'This is customerController';
		$http.get('data.json')
			.success(function(response){
				$scope.customers = response;
			})
	})

	.controller('customerDetailController',function($scope,$routeParams){
		$scope.controllerName = 'This is customerDetailController';
		$scope.dataId = $routeParams.dataId;
	})

	.controller('aboutController',function($scope){
		$scope.controllerName = 'This is aboutController';
	})

	.config(function($routeProvider){
		$routeProvider
			.when('/',{
				controller: 'homeController',
				templateUrl: 'partials/home.html'
				}
			)
			.when('/customers',{
				controller: 'customerController',
				templateUrl: 'partials/customers.html'
				}
			)
			.when('/about',{
				controller: 'aboutController',
				templateUrl: 'partials/about.html'
				}
			)
			.when('/customers/:dataId',{
				controller: 'customerDetailController',
				templateUrl: 'partials/customerDetail.html'
			})

			.otherwise({
				redirectTo:'/'

			});
	});