angular.module('app.modules.services', [
])
.factory("AlertService", function(toastr) {

	var instanceService = {};

	var base = function(action){
		this.action = action;
		this.success = function(item_name){
			var item_name = 'item' || item_name;
			toastr.success(this.action + ' '+ item_name + ' thành công !!!', 'Success');
		};
		this.error = function(item_name) {
			var item_name = 'item' || item_name;
			toastr.error(this.action +  ' ' + item_name + ' thất bại !!!', 'Error');
		};
	}
	instanceService.add = new base('Thêm');
	instanceService.edit = new base('Sửa');
	instanceService.remove = new base('Xóa');

	instanceService.missField = function() {
		toastr.warning('Nhập thiếu trường !!!', 'Warning');
	};

	
	return instanceService;
});