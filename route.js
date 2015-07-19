var CalendarController = require('./controllers/CalendarController');
var HaucanController = require('./controllers/HaucanController');


k_route.setRoute(app, CalendarController, '/api/calendar');
k_route.setRoute(app, HaucanController, '/api/haucan');