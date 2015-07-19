angular.module( "app.modules.haucan.controllers", [
    "app.modules.haucan.controllers.thucpham",
    "app.modules.haucan.controllers.monan",
])
.controller("HaucanController", function ($scope, donviOption) {
	$scope.option = { 
		donvi : donviOption,
		localLang: {
			reset           : "Reset",
	        selectAll       : "Chọn hết",
	        selectNone      : 'Chọn thực phẩm',
	        search          : "Tìm kiếm",
	        nothingSelected : "Chọn thực phẩm" 
	    }
	};

})
.controller("HaucanHomeController", function ($scope) {

});