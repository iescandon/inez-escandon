const db = require('../models');

module.exports = function (app) {
	app.post('/api/response', function (req, res) {
		db.Message.create({
			name: req.body.name,
			email: req.body.email,
			subject: req.body.subject,
			message: req.body.message,
		})
			.then(() => {
				res.status(200);
			})
			.catch((err) => {
				res.status;
			});
	});

	app.get('/api/responses', function (req, res) {
		db.Message.findAll({}).then(function (result) {
			res.json(result);
		});
	});
};
