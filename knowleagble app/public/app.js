angular.module('myapp', ['services', 'expertise', 'ngRoute'])
.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'basicinfo/basicinfo.html',
      		controller: 'myController'
		})
		.when('/basicinfo', {
			templateUrl: 'basicinfo/basicinfo.html',
      		controller: 'myController'
		})
		.when('/expertise', {
			templateUrl: 'expertise/expertise.html',
      		controller: 'expertiseController'
		})
		.otherwise({
			redirectTo: '/'
		})
})
.controller('myController', function($scope, basicAjax, $location, user) {
	// $scope

	$scope.submit = function() {
		var data = {
			firstname: $scope.firstname,
			lastname: $scope.lastname,
			linkedin: $scope.linkedin
		};
		basicAjax.submitProfile(data)
		.then(function(result) {
			// console.log(result, 'this is the result from submiting profile')
			user.setUser(result.data);
			$location.path('/expertise');
		})
	}
});





