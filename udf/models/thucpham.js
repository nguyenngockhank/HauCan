var k_model = require("../k_model");
var instance_model = new k_model('thucpham', 'id');
var squel = instance_model._squel;
var k_time = require('../k_time');



instance_model.arr_from_text = function (content) {
    var lines = content.split('\r');
    var arr = [];
    var now_str = k_time.strNowDB();

    for (var i = 0; i < lines.length; ++i) {
        var line = lines[i].trim();
        if (line == '') 
            continue;
        line = line.replace(/[$",%]/g, "");
        var spices = line.split('\t');
        if(spices.length < 2 || spices[0] == '') 
            continue;
        arr.push({
            ten: spices[0].capitalizeFirstLetter(),
            donvi: spices[1] ? spices[1].toLowerCase() : '',
            dongia: spices[6] || 0,
            created_time: now_str,
            updated_time: now_str
        })
    };
    return arr;
}

instance_model.sql_insert_arr = function (arr) {
    var querybuilder = instance_model.query_insert_batch(arr);
    querybuilder.onDupUpdate('donvi', 'VALUES(donvi)', {
        dontQuote: true
    });
    querybuilder.onDupUpdate('updated_time', 'VALUES(updated_time)', {
        dontQuote: true
    });
    return querybuilder.toString();
}

instance_model.sql_insert_from_text = function (content) {
    var arr = instance_model.arr_from_text(content);
    if(!arr || arr.length == 0)
        return '';
    return instance_model.sql_insert_arr(arr);
}

module.exports = instance_model;