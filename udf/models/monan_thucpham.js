var k_model = require("../k_model");
var instance_model = new k_model('monan_thucpham');
var squel = instance_model._squel;
var k_time = require('../k_time');

instance_model.sql_insert_thucphams = function (monan_id, thucphams) {
    var list = [];
    var now_str = k_time.strNowDB();
    console.log(now_str)

    for (var i = thucphams.length - 1; i >= 0; i--) {
        list.push({
            monan_id: monan_id,
            thucpham_id: thucphams[i].id,
            created_time: now_str,
            updated_time: now_str
        });
    };

    var querybuilder = instance_model.query_insert_batch(list);
    console.log(list, querybuilder);

    querybuilder.onDupUpdate('updated_time', 'VALUES(updated_time)', {
        dontQuote: true
    });
    return querybuilder.toString();
}

module.exports = instance_model;