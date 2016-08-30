var db = require('../db');

module.exports = {
	profile: {
		get: function(req, res) {
			db.User.findAll()
			.then(function(users) {
				console.log(users);
				res.send(users);
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
			console.log('handler expertise name in req===============', req.body.name);
			db.Expertise.findOrCreate({where: {name: req.body.name}})
			.spread(function(expertise, created) {
				console.log(expertise, created, 'in post')
				if(created) {
					res.send(expertise);
				} else {
					res.send(null);
				}
			})
		}
	}
}

