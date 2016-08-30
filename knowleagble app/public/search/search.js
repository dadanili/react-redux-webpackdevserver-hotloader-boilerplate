angular.module('search', [])
.controller('searchController', function($scope, searchAjax, $location, user, page) {
	$scope.user = user.getUser();
	$scope.allUsers = [];
	searchAjax.getAllProfile()
	.then(function(result) {
		console.log('in search factory getting results', result)
		$scope.allUsers = result.data;
		console.log($scope.allUsers[0])
	})
});