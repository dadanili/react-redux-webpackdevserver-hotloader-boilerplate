var Sequelize = require('sequelize');
var db = new Sequelize('knowledgeable', 'root', 'hi', {define: {
        timestamps: false
    }});

var User = db.define('User', {
	firstname: Sequelize.STRING, 
	lastname: Sequelize.STRING,
	linkedin: Sequelize.STRING,
});

var Expertise = db.define('Expertise', {
	name: Sequelize.STRING,
});

var Charity = db.define('Charity', {
	name: Sequelize.STRING,
});

var UserExpertise = db.define('UserExpertise');
var UserCharity = db.define('UserCharity');

User.belongsToMany(Expertise, {through: 'UserExpertise'});
Expertise.belongsToMany(User, {through: 'UserExpertise'});

User.belongsToMany(Charity,{through: 'UserCharity'});
Charity.belongsToMany(User,{through: 'UserCharity'});

User.sync();
Expertise.sync();
UserExpertise.sync();
Charity.sync();
UserCharity.sync();

module.exports.User = User;
module.exports.Expertise = Expertise;
module.exports.UserExpertise = UserExpertise;
module.exports.Charity = Charity;
module.exports.UserCharity = UserCharity;