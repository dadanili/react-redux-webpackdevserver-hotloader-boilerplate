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

	},
	removeExpertise: function(data) {
		console.log('i am in factory remove expertise', data);
		return $http({
			method: 'DELETE',
			url: '/api/expertise',
			data: data,
			headers: {"Content-Type": "application/json;charset=utf-8"}
		})
		.then(function(result){
			console.log('result from removeExpertise', result.data)
			return result.data;
		})
	}


 }
})
.factory('user', function() {
	var userInfo = null;
	var userExpertise = [];
	var defaultUser = {
		firstname: "dani",
		lastname: "li",
		linkedin: "daniyidanli",
		id: 1,
		charity: "Salvation Army",
		expertise: ["Karaoke", "Painting", "Startups"]
	}

	var setUser = function(user) {

		userInfo = user;
	}
	var getUser = function() {
		return userInfo || defaultUser;
	}

	var getExpertise = function() {
		return userExpertise;
	}

	var setExpertise = function(expertise) {
		// expertise.added = true;
		userExpertise.push(expertise);
	}

	return {
		setUser: setUser,
		getUser: getUser,
		getExpertise: getExpertise,
		setExpertise: setExpertise
	}
})
.factory('charityAjax', function($http) {
	return {
		addCharity: function(data) {
			console.log('i am in factory add charity', data);
			return $http({
				method: 'post',
				url: '/api/charity',
				data: JSON.stringify(data),
			})
			.then(function(result){
				console.log('result from removeExpertise', result.data)
				return result.data;
			})
		}
	}
})
.factory('profileAjax', function($http) {
	return {
		getProfile: function(data) {
			console.log('i am in factory for get profile', data);
			return $http({
				method: 'get',
				url: '/api/profile',
				params: data,
				// headers: {
			 //        'Content-Type': 'application/x-www-form-urlencoded'
			 //    }
			})
			.then(function(result){
				console.log('result from get full profile', result)
				return result.data;
			})
		}
	}
})
.factory('searchAjax', function($http) {
	return {
		getAllProfile: function() {
			console.log('i am in factory for all profile');
			return $http({
				method: 'get',
				url: '/api/allprofiles',
			})
			.then(function(result){
				console.log('result from get full profile', result)
				return result.data;
			})
		}
	}
})
.factory('page', function($location) {
	var previousPage = '';

	var setPreviousPage = function() {
		console.log('in previousPage before', $location.path())

		previousPage = $location.path();
		console.log('in previousPage after', previousPage)
	}
	var getPreviousPage = function() {
		console.log('in previousPage before', previousPage)

		return previousPage;
	}
	return {
		getPreviousPage: getPreviousPage,
		setPreviousPage: setPreviousPage

	}
})
