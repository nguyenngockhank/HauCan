angular.module( "app.modules.haucan.controllers.monan", [])
.controller("HaucanMonanController",function ($scope, AlertService, HaucanService, STR_ALERT) {
	HaucanService.monan.all('ten').then(function(response){
        $scope.listmonan = response.data;
        return  HaucanService.thucpham.all('ten');
    }).then(function(response){
        $scope.listthucpham = response.data;


        // DISPLAY THUCPHAM  
        HaucanService.monan.set_list_display_thucphams($scope.listmonan, $scope.listthucpham);
        // DISPLAY THUCPHAM
    });

    var gui = $scope.gui = {
        model_master: {
            ten: '',
            thucphams: ''
        },
        model: {},
    	select_row: {},
    	mode: 'default',
        reset: function(){
            this.model = angular.copy(this.model_master);
            this.mode = 'default';
            delete this.select_row.selected;
            HaucanService.monan.reset_ticked( $scope.listthucpham);
        },
         select_edit: function(item) {
            delete this.select_row.selected;
            this.select_row = item;
            this.select_row.selected = true;
            this.model = angular.copy(item);
            this.mode = 'edit';
            HaucanService.monan.ticked(this.model, $scope.listthucpham);

            console.log(item)

        },
    };

    $scope.monan = {  	
        // submit to server
        edit: function(){
            if($scope.mainForm.$invalid){
                AlertService.missField();
                return;
            }

            var obj = angular.copy(gui.model);
            HaucanService.monan.edit(obj).then(function(response){
                if(response.status == 'success') {
                    angular.extend(gui.select_row ,  gui.model);
                    // DISPLAY THUCPHAM  
                    HaucanService.monan.set_display_thucphams(gui.select_row, $scope.listthucpham);
                    // DISPLAY THUCPHAM
                    console.log(gui.select_row, gui.model)
                    gui.reset();
                    AlertService.edit.success();
                } else {
                    gui.reset();
                    AlertService.edit.error();
                }
            });

        },
        add: function(){
            if($scope.mainForm.$invalid){
                AlertService.missField();
                return;
            }
            HaucanService.monan.add(gui.model).then(function(response){
                if(response.status == 'success') {
                    var newrow = angular.copy(gui.model);
                    // DISPLAY THUCPHAM  
                    HaucanService.monan.set_display_thucphams(newrow, $scope.listthucpham);
                    // DISPLAY THUCPHAM
                    $scope.listmonan.push(newrow);
                    gui.reset();
                    AlertService.add.success();
                } else {
                    AlertService.add.error();
                }
            });
        },
        remove: function(item){
            var ok = confirm(STR_ALERT.before_remove);
            if(!ok)
                return;            
            HaucanService.monan.remove(item.id).then(function(response){
                if(response.status == 'success'){
                    $scope.listmonan.remove(item);
                    AlertService.remove.success();
                } else {
                    AlertService.remove.error();
                }
            })
        },
    }

    gui.reset();
});