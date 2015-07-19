var db = require('../models');

var monan_thucpham_model = require('../udf/models/monan_thucpham.js');

module.exports = {
	
	getListMonan: function(req,res){
		db.monan.findAll({
			include: [
				{ model: db.thucpham , as: 'thucphams', required: false},
			]
		}).success(function(result){
			res.json({'status':'success', data: result});
		})
		.error(function(error){
			res.json(500, {"status": "error", "message": error});
		});
	},

	postInsertMonan: function(req,res){
		console.log(req.body)
		var model = req.body.data;

		db.monan.create(model)
		.success(function(data){
			console.log(data)
			model.id = data.id;
			var sql_thucphams = monan_thucpham_model.sql_insert_thucphams(data.id, model.thucphams);
			return db.sequelize.query(sql_thucphams);	
		})
		.then(function(data){
			res.json({"status": "success", "data": model});
		})
		.error(function(error){
			res.json(500, {"status": "error", "message": error});
		});
	},

}