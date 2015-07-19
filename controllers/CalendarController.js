var db = require('../models');
var Excel = require("exceljs");
var XlsxTemplate = require('xlsx-template');
var fs = require("fs");


module.exports = {
	
	getMonan: function(req,res){
		db.monan.find({
			include: [
				{ model: db.thucpham , as: 'thucphams'},
			]
		}).success(function(result){
			res.json({'status':'success', row:result});
		})
		.error(function(error){
			res.json(500, {"status": "error", "message": error});
		});
	},

	getTestTemplate: function (req, res) {
		fs.readFile('./files/templates/t1.xlsx', function(err, data) {
			if(err) {
				res.end();
				return;
			}
		    // Create a template
		    var template = new XlsxTemplate(data);

		    // Replacements take place on first sheet
		    var sheetNumber = 1;

		    // Set up some placeholder values matching the placeholders in the template
		    var values = {
		            extractDate: new Date(),
		            dates: new Date("2013-06-01"),
		            planData: [
		                {name: "John Smith", days: 20, role: 'admin'},
		                {name: "Bob Johnson", days: 22, role: 'user'}
		            ]
		        };

		    // Perform substitution
		    template.substitute(sheetNumber, values);

		    // Get binary data
		    var data = template.generate();

		    // ...
	
			fs.writeFileSync('./files/myOutput.xlsx', data, 'binary');
			res.download('./files/myOutput.xlsx',function(err){
				console.log(err, 2);
				res.end();
			});
		    
		});
	},

	getStreamExcel: function (req, res){
		var options = {
			filename: "./files/kettoankho.xlsx",
			useStyles: true,
			useSharedStrings: true
		};
		var stream = new Excel.stream.xlsx.WorkbookWriter(options);
		//console.log(workbook);
		
				
		var workbook2 = new Excel.Workbook();
		stream.pipe(workbook2.xlsx.createInputStream());
		//console.log(workbook)
		var worksheet = workbook2.getWorksheet(1);
		
		var titleRow = worksheet.getRow(1);
		var cell = titleRow.getCell(1);
		cell.value = '12/12/2012';
	
		titleRow.commit();
	},
	
	getTestExcel: function (req, res){
		console.log(' B4 READ FILE ')
		var workbook = new Excel.Workbook();
		workbook.xlsx.readFile('./files/kettoankho.xlsx')
		.then(function() {
			console.log(' READ FILE ')
			var worksheet = workbook.getWorksheet('Sheet1');

			var titleRow = worksheet.getRow(1);
			var cell = titleRow.getCell(1);
			cell.value = '12/12/2012';
			cell.font = {
				name: "Comic Sans MS",
				family: 4,
				size: 16,
				underline: true,
				bold: true
			};
			console.log(cell)
			var options = {
				useStyles: true,
				useSharedStrings: true
			};
			console.log(' SET UP OK ')
			
			var path = './files/testtesst.xlsx';
			workbook.xlsx.writeFile(path, options)
			.then(function() {
				console.log(' WRITE FILE OK ')
				res.download(path,function(err){
					console.log(err);
					res.end();
				});
			});
			
		}, function(err){
			console.log(err);
			res.end();
		});
	},
	
	getGenerate: function(req,res){
		
	},
	
	getDownload: function(req,res){
		
		var path= './files/Reportz.xlsx'
		res.download(path,function(err){
			console.log(err);
			res.end();
		});
	}
	
}