var db = require('../../models');

var thucdon_model = require('../../udf/models/thucdon.js');

module.exports = {
	postSave: function(req,res){
		var lich = req.body.data; // {id , [{type: , id} , {type, id}] }
		
		var sql = thucdon_model.sql_insert_batch(lich.id, lich.thucdon);

		db.sequelize.query(sql)
		.then(function(data){
			res.json({"status": "success", "data": lich});
		})	
		.error(function(error){
			res.json(500, {"status": "error", "message": error});
		});
	},
}