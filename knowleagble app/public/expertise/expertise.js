angular.module('expertise', [])
.controller('expertiseController', function($scope, expertiseAjax, $location) {
	// $scope

	$scope.getExpertise = function() {
		expertiseAjax.getExpertise()
		.then(function(result) {
			console.log('got exptise!', result)
			$scope.expertiseArray = result;
			console.log('in getExpertise result:', $scope.expertiseArray);
		})
	}
	$scope.getExpertise();
	console.log($scope.expertiseArray, 'list')

	$scope.addExpertise = function() {
		var data = {
			name: $scope.expertise
		};
		console.log('expertise to add', data)

		expertiseAjax.addExpertise(data)
		.then(function(res) {
			console.log("add", res, "array", $scope.expertiseArray)
			res && $scope.expertiseArray.push(res);
			// $location.path('/expertise');
			$scope.expertise = '';
		})
	}

});




