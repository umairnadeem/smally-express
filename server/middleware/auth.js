const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
	// create a session
	// set that session to be a property of the request. 
	models.Sessions.create().then(() => {
		models.Sessions.get({hash: models.Sessions.hash}).then(session => {
			req.session = session;
			res.cookies = {
				shortlyid: {
					value: models.Sessions.hash
				}
			}
			console.log(req.session);
			next();
		});

		
	});
	
	// models.Sessions.create().then(() => models.Sessions.get(models.Sessions.hash)).then(session => {
	// 	req.session = session;
	// 	console.log(req.session);
	// 	next();
	// });
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

