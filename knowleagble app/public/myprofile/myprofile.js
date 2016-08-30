angular.module('myprofile', [])
.controller('profileController', function($scope, page, profileAjax, user) {
	$scope.editprofile = false;
	var dani = {
		firstname: "dani",
		lastname: "li",
		linkedn: "daniyidanli.linkedin.com",
		id: 100000
	}
	$scope.editProfile = function() {
		$scope.editProfile = !$scope.editProfile;
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