var db = require('../models');
var Excel = require("exceljs");
var XlsxTemplate = require('xlsx-template');
var fs = require("fs");


module.exports = {
	
	getTestTemplate: function (req, res) {
		fs.readFile(path.join(__dirname, 'templates', 'template1.xlsx'), function(err, data) {

		    // Create a template
		    var template = new XlsxTemplate(data);

		    // Replacements take place on first sheet
		    var sheetNumber = 1;

		    // Set up some placeholder values matching the placeholders in the template
		    var values = {
		            extractDate: new Date(),
		            dates: new Date("2013-06-01"), new Date("2013-06-02"), new Date("2013-06-03"),
		            people: [
		                {name: "John Smith", age: 20},
		                {name: "Bob Johnson", age: 22}
		            ]
		        };

		    // Perform substitution
		    template.substitute(sheetNumber, values);

		    // Get binary data
		    var data = template.generate();

		    // ...

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