var k_model = require("../k_model");
var instance_model = new k_model('lichan', 'id');
var squel = instance_model._squel;

instance_model.sql_insert_batch = function (list) {
    var querybuilder = instance_model.query_insert_batch(list);
    querybuilder.onDupUpdate('updated_time', 'VALUES(updated_time)', {
        dontQuote: true
    });
    return querybuilder.toString();
}

module.exports = instance_model;