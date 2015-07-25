var k_model = require("../k_model");
var instance_model = new k_model('thucdon', 'id');
var squel = instance_model._squel;

instance_model.sql_insert_batch = function (lich_id, list_thucdon) {

	var list = [];

	for(var i =0; i < list_thucdon.length; ++i){	
		var value = list_thucdon[i];
		var model = {thucpham_id: null, monan_id: null, lich_id: lich_id};
		if(value.type == 'thucpham') {
			model.thucpham_id = value.id;
		} else if (value.type == 'monan'){
			model.monan_id = value.id;
		}
		list.push(model);
	}


    var querybuilder = instance_model.query_insert_batch(list);
    querybuilder.onDupUpdate('updated_time', 'VALUES(updated_time)', {
        dontQuote: true
    });
    return querybuilder.toString();
}

module.exports = instance_model;