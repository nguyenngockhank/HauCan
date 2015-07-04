var fs = require('fs'),
    path = require('path'),
    Sequelize = require('sequelize'),
    useTransaction = require('sequelize-transactions');
	
var lodash = require('lodash'),
    sequelize = new Sequelize('haucan', 'root', 'root', {
        host: 'localhost',
        port: 3306,
        maxConcurrentQueries: 100,
        pool: { maxConnections: 10, maxIdleTime: 1000},
        timezone: '+00:00'
    });
useTransaction(sequelize);
var db = {};

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== 'index.js')
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
		console.log(model.name)
        db[model.name] = model
    });

Object.keys(db).forEach(function(modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db)
    }
});



module.exports = lodash.extend({
    sequelize: sequelize,
    Sequelize: Sequelize
}, db);