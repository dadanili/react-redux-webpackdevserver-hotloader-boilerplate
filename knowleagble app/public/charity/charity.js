angular.module('charity', [])
.controller('charityController', function($scope, charityAjax, $location, user, page) {
	$scope.user = user.getUser();
	$scope.selected = null;
	$scope.charityArray = ["Salvation Army", "Feeding America", "Task Force for Global Health", "St. Jude Children/'s Research Hospital"]
	$scope.submitCharity = function() {
		console.log($scope.charityArray[$scope.selected]);
		var data = {
			userId: $scope.user.id,
			charityName: $scope.charityArray[$scope.selected]
		}
		
		charityAjax.addCharity(data)
		.then(function(result) {
			page.setPreviousPage();
			$location.path('/myprofile');
		})
	}
	$scope.select = function(index) {
		console.log(index);
		$scope.selected = index;
	}

});