angular.module( "app.modules.haucan.controllers.monan", [])
.controller("HaucanMonanController",function ($scope, AlertService, HaucanService, STR_ALERT) {
	HaucanService.monan.all().then(function(response){
        $scope.listmonan = response.data;
        // DISPLAY THUCPHAM  
        HaucanService.monan.set_display_thucphams($scope.listmonan);
        // DISPLAY THUCPHAM
    });

    HaucanService.thucpham.all().then(function(response){
        $scope.listthucpham = response.data;
    });

    var gui = $scope.gui = {
    	select_row: {},
    	mode: 'default',
    };

    $scope.monan = {
    	
    	model_master: {
            ten: '',
            thucphams: ''
        },
        model: {},
        reset: function(){
            this.model = angular.copy(this.model_master);
            gui.mode = 'default';
            delete gui.select_row.selected;
        },

        // submit to server
        add: function(){
            if($scope.mainForm.$invalid)  return;

            HaucanService.monan.save(this.model).then(function(response){
                if(response.status == 'success') {
                    $scope.listmonan.push(response.data)
                    $scope.monan.reset();

                    AlertService.add.success();
                } else {
                    AlertService.add.error();
                }
            });
        },
    }

    $scope.monan.reset();
});