// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require('express');
const path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

var distDir = __dirname + '/dist/';
app.use(express.static(distDir));
//hello
// Requiring our models for syncing
var db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// Routes
// =============================================================

require('./routes/api-routes')(app);

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname + '/dist/client/index.html'));
});

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function () {
	app.listen(PORT, function () {
		console.log('App listening on PORT ' + PORT);
	});
});
