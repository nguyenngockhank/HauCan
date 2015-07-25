angular.module('app.modules.haucan.services', [
])
.factory("HaucanService", function(Restangular, restInstance, $filter) {

    var dbDateFormat = $filter('dbDateFormat');
    

    var restApi =     Restangular.all('restful'), 
	haucanApi = Restangular.all('haucan'), 
	thucphamApi = {}, 
	monanApi = {},
    lichanApi = {},
    thucdonApi = {}
    ;
	angular.extend(thucphamApi , restInstance(restApi, 'thucpham'));
	angular.extend(monanApi , restInstance(restApi, 'monan'));
    angular.extend(lichanApi , restInstance(restApi, 'lichan'));
    angular.extend(thucdonApi , restInstance(restApi, 'thucdon'));

	var instanceService = {
		thucpham: thucphamApi,
		monan: monanApi,
        lichan: lichanApi,
        thucdon: thucdonApi
	};

    /*
    *   MON AN
    */
	instanceService.monan.all = function() {
        var instanceApi = haucanApi.one("monan/list");
        return instanceApi.get();
    };

    instanceService.monan.add = function(model){
    	var instanceApi = haucanApi.all("monan/insert");
        return instanceApi.post({'data' : model});
    };

    instanceService.monan.edit = function(model){
        var instanceApi = haucanApi.all("monan/edit");
        return instanceApi.post({'data' : model});
    };

    instanceService.monan.set_display_thucphams = function(monan, listhucpham) {
        var display = '';
        var new_thucphams = [];
        angular.forEach(monan.thucphams, function(thucpham){
            display += thucpham.ten + ', ';
            var index = _.findIndex(listhucpham, {id: thucpham.id});
            if(index != -1) {
                new_thucphams.push(listhucpham[index]);
            }
        });
        monan.thucphams = new_thucphams;
        monan.display_thucphams = display;
    };

    instanceService.monan.set_list_display_thucphams = function(listmonan, listhucpham){
    	angular.forEach(listmonan, function(monan) {
            instanceService.monan.set_display_thucphams(monan, listhucpham);
        })
    };

    instanceService.monan.reset_ticked = function(listhucpham){
        angular.forEach(listhucpham, function(thucpham){
            thucpham.ticked = false;
        });
    }

    instanceService.monan.ticked = function(monan, listhucpham) {
        instanceService.monan.reset_ticked(listhucpham);
        angular.forEach(monan.thucphams, function(thucpham){
            var index = _.findIndex(listhucpham, {id: thucpham.id});
            console.log(index)
            if(index != -1) {
                listhucpham[index].ticked = true;
            }
        });
    };

    /*
    *  END MON AN
    */

    lichanApi.search = function(start_date) {
        var str_start = dbDateFormat(start_date);
        var instanceApi = haucanApi.one("list_lichan");
        return instanceApi.get({start_date: str_start});
    }


    thucdonApi.save = function(model) {
        var instanceApi = haucanApi.all("thucdon/save");
        return instanceApi.post({'data' : model});
    }

	return instanceService;
});