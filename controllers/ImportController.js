var db = require('../models');
var fs = require("fs");

var filename = './files/luong thuc.txt';
var thucpham_model = require('../udf/models/thucpham.js');
var lichan_model = require('../udf/models/lichan.js');

var k_time = require('../udf/k_time.js');

module.exports = {
	
	getFromText: function(req,res){
		fs.readFile(filename, "utf-8", function(err, content){
			var sql = thucpham_model.sql_insert_from_text(content);
			 
			db.sequelize.query(sql)
        	.success(function(data){
        		res.json({data: data});
	        })
	        .error(function(err){
	            res.json({status:'error', err:err});
	        });
		});
	},

	getGenerateCalendar: function(req, res) {
		var date = req.query.date;
		var d = date ? new Date(date) : new Date("2015-01-01");
		var str_now = k_time.strNowDB();
		var arr = [];
		
		for(var i =0 ; i< 30; i++) {
			var ngay = k_time.strDateDB(d);
			[0,1,2].forEach(function(value){
				arr.push({
					ngay: ngay,
					buoi: value,
					created_time : str_now,
					updated_time: str_now
				});
			});
			d.setDate(d.getDate() + 1);
		}
		//res.json(arr);return

		var sql = lichan_model.sql_insert_batch(arr);

		db.sequelize.query(sql)
    	.success(function(data){
    		res.json({data: data});
        })
        .error(function(err){
            res.json({status:'error', err:err});
        });
	}
}