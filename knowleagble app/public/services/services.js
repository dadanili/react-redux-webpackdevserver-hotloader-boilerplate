angular.module('services', [])
.factory('basicAjax', function($http) {
 return {
 	submitProfile: function(data) {
 		return $http({
 			method: 'POST',
 			url: '/api/profile',
 			data: JSON.stringify(data),
 		})
 		.then(function(res) {
 			console.log(res);
 			return res;
 		})
 	}
 }
})
.factory('expertiseAjax', function($http) {
 return {
 	getExpertise: function() {
 		return $http({
 			method: 'GET',
 			url: '/api/expertise',
 		})
 		.then(function(result) {
 			console.log('in factory',result.data);
 			return result.data;
 		})
 	}, 
	addExpertise: function(data) {
		console.log('in factory add expertise', data)
		return $http({
			method: 'POST',
			url: '/api/expertise',
			data: JSON.stringify(data),
			"content-type": 'json'
		})
		.then(function(result) {
			console.log('result from addExpertise', result.data);
			return result.data;
		})

	}
 }
})
.factory('user', function() {
	var userInfo = {};
	var setUser = function(user) {
		console.log('in setuser before', userInfo)

		userInfo = user;
		console.log('in setuser after', userInfo)
	}
	var getUser = function() {
		return userInfo;
	}
	return {
		setUser: setUser,
		getUser: getUser
	}
})
