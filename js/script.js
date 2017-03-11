function homeController($scope){
	$scope.controllerName = 'homeController';

	$scope.doSomething = function(){
		console.log('Doing something...')
	}

	$scope.doAnotherThing = function(param){
		console.log('Doing another thing '+param);
	}
}