var express = require('express');
var path = require('path');
var cookie = require('cookie');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var restful = require('sequelize-restful');
var db = require('./models');
var fs = require('fs');
var k_route = require('./helper/k_route.js');

var app = express();
app.set('port', process.env.PORT || 3000);


process.env.TMPDIR =path.join(__dirname, 'temp');

app.use(express.static(__dirname + '/client'));


app.use(restful(db.sequelize, { endpoint: '/api/restful'}));

eval(fs.readFileSync('./route.js')+'');


db.sequelize
.authenticate()
.then(function(err) {
	if (err) {
		throw err[0];
	} else {
		// http.createServer(httpApp).listen(httpApp.get('port'), function() {
		//     console.log('Express HTTP server listening on port ' + httpApp.get('port'));
		// });
		 
		app.listen(app.get('port'), function() {
			console.log('Express HTTP server listening on port ' + app.get('port'));
		});
		console.log('Connection has been established successfully!');
	}
});