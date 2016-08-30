var db = require('../db');

module.exports = {
	profile: {
		get: function(req, res) {
			console.log('=======get profile req params', req.params, req.query.id)
			var profile = {};
			db.User.findById(req.query.id)
			.then(function(user) {
				console.log(user);
				profile = user.get({plain: true})
				profile.expertise = [];
				return user;
			})
			.then(function(user){
				db.UserCharity.findOne({where: {userId: user.id}})
				.then(function(usercharity) {
					console.log('found user charity', usercharity.CharityId)
					db.Charity.findById(usercharity.CharityId)
					.then(function(charity) {
						console.log('charrrity', charity);
						profile.charityId = charity.id;
						profile.charity = charity.name;
						console.log('profile============', profile)
						console.log('user===', user)

						user.getExpertises()
						.then(function(expertises) {
							expertises.forEach(function(expertise) {
								db.Expertise.findById(expertise.UserExpertise.ExpertiseId)
								.then(function(foundExpertise) {
									console.log('===expertise name', foundExpertise, foundExpertise.name);
									profile.expertise.push(foundExpertise.name);
									console.log('my profile expertises', profile.expertise)
									console.log('leeeeeength', profile.expertise.length, expertises.length)
									if (profile.expertise.length === expertises.length){
										res.send(profile);
									}
								})
							})
						})
						
						
						// db.UserExpertise.findAll({where: {UserId: profile.id}})
						// .then(function(expertises) {
						// 	console.log('======expertises', expertises, expertises.ExpertiseId)
						// 	db.Expertise.findById(expertises.ExpertiseId)
						// 	.then(function(expertise) {

						// 		profile.expertiseId = expertise.id;
						// 		profile.expertise = expertise.name;
						// 		console.log('profile============', profile)
								
						// 	})
						// })
					})
				})
			})
		},
		post: function(req, res) {
			console.log(req.body,'in handler post!!!')
			db.User.create({
				firstname: req.body.firstname,
				lastname: req.body.lastname,
				linkedin: req.body.linkedin
			})
			.then(function(user) {
				console.log(user.get({
			    	plain: true
			    }));
				res.send(user)
			})
		}
	},

	expertise: {
		get: function(req, res) {
			console.log('in get expertise handler')
			db.Expertise.findAll()
			.then(function(result) {
    			console.log('in get result', result)
				res.send(result);
			})
		},
		post: function(req, res) {
			console.log('handler expertise name in req===============', req.body.user);
			db.Expertise.findOrCreate({where: {name: req.body.expertise}})
			.spread(function(expertise, created) {
				console.log(req.body.user.id, ' =====in post')

				db.User.findById(req.body.user.id)
				.then(function(user) {
					user.addExpertise(expertise)
					.then(function(add) {
						console.log('ADDED EXPERTISE!!!', add)
						if(created) {
							res.send(expertise);
						} else {
							res.send(null);
						}
						
					})
				})
				// db.User.findOne({where: getUser})
			})

		},
		delete: function(req, res) {
			console.log('i am in delete handler?', req.body);
			db.UserExpertise.findOne({where: {userId: req.body.userId, expertiseId: req.body.expertiseId}})
			.then(function(user) {
				console.log('found expertise', user)
				user.destroy();
				res.send('removed')
			})
		}
	},
	charity: {
		post: function(req, res) {
			console.log('-------------inside post for charity', req.body);

			db.Charity.findOne({where: {name: req.body.charityName}})
			.then(function(charity) {
				console.log('userid',req.body.userId)
				console.log('-----------found charity', charity)
				db.User.findById(req.body.userId)
				.then(function(user) {
					console.log('found user!!!', user)

					user.addCharity(charity)
					.then(function(added) {
						console.log('-------------found charity', added, user.id, req.body.userId)	;
						res.send();
					})
					
				})
				// user.set('charityId', charity.id);

				// db.UserCharity.findOrCreate({where: {userId: req.body.userId, charityId: charity.get('id')}})
				// .then(function(user, create) {
				// 	console.log('found expertise', user)
				// 	res.send('added Charity');
				// })
				
			})
			

			// db.User.findById(req.body.userId)
			// .then(function(user) {
			// 	console.log('found usre', user);
			// 	db.Charity.findOne({where: {name: req.body.charityName}})
			// 	.then(function(charity) {
			// 		console.log('found charity', charity);
			// 		user.set('charityId', charity.id);
					
			// 	})
			// })
		}
	},
	search: {
		get: function(req, res) {
			db.User.findAll()
			.then(function(users) {
				console.log(users);
				res.send(users);
			})
		},
	}
}

