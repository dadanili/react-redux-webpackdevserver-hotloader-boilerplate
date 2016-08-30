var Sequelize = require('sequelize');
var db = new Sequelize('knowledgeable', 'root', 'hi');

var User = db.define('User', {
	firstname: Sequelize.STRING, 
	lastname: Sequelize.STRING,
	linkedin: Sequelize.STRING,
});

var Expertise = db.define('Expertise', {
	name: Sequelize.STRING,
});

User.belongsToMany(Expertise, {through: 'UserExpertise'});

Expertise.belongsToMany(User, {through: 'UserExpertise'});

User.sync();
Expertise.sync();


module.exports.User = User;
module.exports.Expertise = Expertise;