var db = require('../../models');

var monan_thucpham_model = require('../../udf/models/monan_thucpham.js');

module.exports = {

	getList: function(req,res){
		db.monan.findAll({
			include: [
				{ model: db.thucpham , as: 'thucphams', required: false},
			],
			where: {deleted_time :  null},
			order: 'ten ASC'
		}).success(function(result){
			res.json({'status':'success', data: result});
		})
		.error(function(error){
			res.json(500, {"status": "error", "message": error});
		});
	},

	postInsert: function(req,res){
		var model = req.body.data;

		if(!model || Object.getOwnPropertyNames(model).length === 0) {
			res.json({status: 'error'})
			return;
		}

		db.monan.create(model)
		.success(function(data){
			console.log(data)
			model.id = data.id;
			if(!model.thucphams || model.thucphams.length ==0) {
				res.json({"status": "success", "data": model});
				return;
			}

			var sql_thucphams = monan_thucpham_model.sql_insert_thucphams(data.id, model.thucphams);
			db.sequelize.query(sql_thucphams)
			.then(function(data){
				res.json({"status": "success", "data": model});
			})	
		})
		.error(function(error){
			res.json(500, {"status": "error", "message": error});
		});
	},
	postEdit: function(req,res){
		var model = req.body.data;
		if(!model || Object.getOwnPropertyNames(model).length === 0) {
			res.json({status: 'error'})
			return;
		}

		var id = model.id; 
		var thucphams = model.thucphams;
		delete model.id;
		delete model.thucphams;

		var instance = {};

		db.monan.find({
			where: {id : id}
		}).success(function(data){
			instance = data;
			return instance.updateAttributes(model)
		})
		.success(function(updated){
			return instance.setThucphams(thucphams);
		})
		.success(function(updated){
			res.json({'status': 'success', 'data': updated});
		})
		.error(function(error){
			res.json(500, {"status": "error", "message": error});
		});
	},
}