var instance = {
	strDateDB: function(date){
		if(typeof date === 'string'){
			var split = date.split("/");

			var dates = split[0];
			var month = split[1];
			var year = split[2];
		}else{
			var dates = date.getDate();
			var month = date.getMonth()+1;
			var year = date.getFullYear();

			if(month < 10)  month = '0' + month; 
			if(dates < 10)  dates = '0' + dates; 
		}
		return year+"-"+month+"-"+dates;
	},
	strDatetimeDB: function(date) {
		var hours = date.getHours();
		var mins = date.getMinutes();
		var secs = date.getSeconds(); 
		if(hours < 10)  hours = '0' + hours; 
		if(mins < 10)  mins = '0' + mins; 
		if(secs < 10)  secs = '0' + secs; 

		var pre = this.strDateDB(date);
		return pre + ' ' + hours + ':' + mins + ':' + secs;
	},
	strNowDB: function() {
		return this.strDatetimeDB(new Date());
	}
	
}

module.exports = instance;