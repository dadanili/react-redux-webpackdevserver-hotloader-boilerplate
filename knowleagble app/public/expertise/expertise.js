angular.module('expertise', [])
.controller('expertiseController', function($scope, expertiseAjax, $location, user, page) {
	// $scope
	$scope.user = user.getUser();
	$scope.getExpertise = function() {
		expertiseAjax.getExpertise()
		.then(function(result) {
			console.log('got exptise!', result)
			$scope.expertiseArray = result;
			console.log('in getExpertise result:', $scope.expertiseArray);
		})
	}
	$scope.getExpertise();

	$scope.addExpertise = function() {
		var data = {
			expertise: $scope.expertise,
			user: $scope.user
		};
		expertiseAjax.addExpertise(data)
		.then(function(result) {
			if (result) {
				result.added = true;
				$scope.expertiseArray.push(result);
			}
			// $location.path('/expertise');
			$scope.expertise = '';
		})
	}

	$scope.selectExpertise = function(index) {
		user.setExpertise($scope.expertiseArray[index]);
	}

	$scope.addExpertiseToProfile = function(index) {
		console.log($scope.expertiseArray[index],'item')
		$scope.expertiseArray[index].added = true;
		var data = {
			expertise: $scope.expertiseArray[index].name,
			user: $scope.user
		};
		expertiseAjax.addExpertise(data)
		.then(function(result) {
			// $scope.expertiseArray.push(result);
			console.log('added my to profile')
		})
	}
	$scope.removeExpertiseFromProfile = function(index) {
		console.log($scope.expertiseArray[index],'item')
		$scope.expertiseArray[index].added = false;
		var data = {
			expertiseId: $scope.expertiseArray[index].id,
			userId: $scope.user.id
		};
		expertiseAjax.removeExpertise(data)
		.then(function(result) {
			// $scope.expertiseArray.push(result);
			console.log('removed from my profile')
		})
	}
	$scope.nextPage = function() {
		$scope.setPreviousPage();
		$location.path('/charity');
	}
	$scope.setPreviousPage = function() {
		page.setPreviousPage($location.$$path)
	}
});




