angular.module('myprofile', [])
.controller('profileController', function($scope, page, profileAjax, user) {
	var dani = {
		firstname: "dani",
		lastname: "li",
		linkedn: "daniyidanli.linkedin.com",
		id: 100000
	}
	$scope.user = user.getUser() || dani;
	$scope.myprofile ='hey';
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