module.exports = function (app) {
	app.get('/signin', (req, res, next) => {
		res.render('signin');
	});
};
