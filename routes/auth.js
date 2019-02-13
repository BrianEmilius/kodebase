const Query = require('../lib/queries');
const users = new Query('users');

module.exports = function (app) {
	app.post('/auth/signin', async (req, res, next) => {
		try {
			const result = await users.findOne({ email: req.fields.username, secret: req.fields.password });
			if (result.length === 1) {
				req.session.user = result[0].id;
				res.redirect('/');
			} else {
				res.redirect('/signin');
				return;
			}
		} catch(err) {
			next(err);
		}
	});
};
