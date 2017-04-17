var express = require('express');
var app = express();

var mongoose = require('mongoose');
var config = require('./config');

var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');
var routesController = require('./controllers/routesController');

mongoose.connect(config.getDbConnectionString());

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

setupController(app);
apiController(app);
routesController(app);

app.listen(process.env.PORT || 3000);