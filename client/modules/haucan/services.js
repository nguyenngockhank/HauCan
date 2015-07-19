angular.module('app.modules.haucan.services', [
])
.factory("HaucanService", function(Restangular, restInstance) {

	var restApi = 	Restangular.all('restful'), 
		haucanApi = Restangular.all('haucan'), 
		thucphamApi = {}, 
		monanApi = {};
	angular.extend(thucphamApi , restInstance(restApi, 'thucpham'));
	angular.extend(monanApi , restInstance(restApi, 'monan'));

	var instanceService = {
		thucpham: thucphamApi,
		monan: monanApi
	};

	instanceService.monan.all = function() {
        var instanceApi = haucanApi.one("list_monan");
        return instanceApi.get();
    };

    instanceService.monan.save = function(model){
    	var instanceApi = haucanApi.all("insert_monan");
        return instanceApi.post({'data' : model});
    };

    instanceService.monan.set_display_thucphams = function(listmonan){
    	angular.forEach(listmonan, function(monan) {
            var display = '';
            angular.forEach(monan.thucphams, function(thucpham){
                display += thucpham.ten + ', ';
            });
            monan.display_thucphams = display;
        })
    };

	return instanceService;
});