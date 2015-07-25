var CalendarController = require('./controllers/CalendarController');
var HaucanController = require('./controllers/HaucanController');
var MonanController = require('./controllers/haucan/MonanController');
var ThucdonController = require('./controllers/haucan/ThucdonController');

var ImportController = require('./controllers/ImportController');




k_route.setRoute(app, CalendarController, '/api/calendar');
k_route.setRoute(app, HaucanController, '/api/haucan');
k_route.setRoute(app, ImportController, '/api/import');

k_route.setRoute(app, MonanController, '/api/haucan/monan');
k_route.setRoute(app, ThucdonController, '/api/haucan/thucdon');