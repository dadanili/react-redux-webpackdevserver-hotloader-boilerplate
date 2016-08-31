angular.module('myprofile', [])
.controller('profileController', function($scope, page, profileAjax, user, $window) {
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
	$scope.updateProfile = function(firstname) {
		console.log(firstname, 'new first name')
		var data = {
			id: $scope.myprofile.id,
			blurb: $scope.myprofile.blurb,
			linkedin: $scope.myprofile.linkedin,
			firstname: $scope.myprofile.firstname,
			lastname: $scope.myprofile.lastname
		}
		profileAjax.updateProfile(data)
		.then(function(response) {
			console.log('after updating profile', response)
			$window.location.reload();
		})

	}

})