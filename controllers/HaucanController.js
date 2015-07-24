var db = require('../models');

var monan_thucpham_model = require('../udf/models/monan_thucpham.js');
var k_time = require('../udf/k_time.js');


module.exports = {

	getListLichan: function(req, res) {
		var sdate = req.query.start_date;
		var start_date = new Date(sdate);
		var end_date = new Date(start_date);
		end_date.setDate(end_date.getDate() + 6);

		var str_start = k_time.strDateDB(start_date);
		var str_end = k_time.strDateDB(end_date);
		

		db.lichan.findAll({
			where: {
				ngay : {
					gte: str_start,
					lte: str_end
				}
			},
			order: [
				['ngay', 'ASC'],
				['buoi', 'ASC']
			]
		}).success(function(data){
			res.json({'status': 'success', 'data': data});
		})
		.error(function(error){
			res.json(500, {"status": "error", "message": error});
		});
	},

	postMonanSearch: function(req, res) {
		var limit = (req.body.limit) ? req.body.limit : 10;
        var offset = (req.body.offset) ? req.body.offset : 0;
		var fields = req.body.fields;
		var search_data = req.body.search;
		// console.log(search_data)
		var agrs = [];
		for (var key in search_data) {
			if(search_data[key])
			agrs.push(key + " LIKE '"+ search_data[key] +"%'");
		};

		var whereOpt = agrs.length ? db.Sequelize.and.apply(null, agrs) : null;

		db.monan.findAndCountAll({
			where: whereOpt,
			offset: offset,
			limit: limit,
			attributes: fields,
			order: 'ten ASC'
		}).success(function(result){
			res.json({"status": "success", "data": result.rows, "count": result.count});
		})
		.error(function(error){
			res.json(500, {"status": "error", "message": error});
		});
	},
	
	getListMonan: function(req,res){
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


}