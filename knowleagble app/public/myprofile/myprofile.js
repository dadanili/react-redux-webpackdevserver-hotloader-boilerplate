angular.module('myprofile', [])
.controller('profileController', function($scope, page, profileAjax, user) {
	$scope.editing = false;
	var dani = {
		firstname: "dani",
		lastname: "li",
		linkedn: "daniyidanli",
		id: 100000
	}
	$scope.editProfile = function() {
		$scope.editing = !$scope.editing;
	}
	$scope.user = user.getUser();
	console.log('user', $scope.user)

	$scope.previousPage = page.getPreviousPage();

	$scope.getProfile = function(user) {
		$scope.loading = true;

		profileAjax.getProfile(user)
		.then(function(result) {
			$scope.myprofile = result;
			$scope.loading = false;
			console.log('myprofile', $scope.myprofile)
		})
	}
	$scope.getProfile($scope.user)

})