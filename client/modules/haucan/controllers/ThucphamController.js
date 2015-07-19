angular.module( "app.modules.haucan.controllers.thucpham", [])
.controller("HaucanThucphamController", function ($scope, AlertService, HaucanService,STR_ALERT) {
    
    HaucanService.thucpham.all().then(function(response){
        $scope.listthucpham = response.data;
    });

    $scope.thucpham = {
        select_row: {},
        mode: 'default',
        model_master: {
            donvi: ($scope.option.donvi.length > 0) ? $scope.option.donvi[0].code : '',
            ten: '',
            dongia: ''
        },
        model: {},
        reset: function(){
            this.model = angular.copy($scope.thucpham.model_master);
            this.mode = 'default';
            delete this.select_row.selected;
        },
        select_edit: function(item) {
            delete this.select_row.selected;
            this.select_row = item;
            this.select_row.selected = true;
            this.model = angular.copy(item);
            this.mode = 'edit';
        },
        // submit to server
        edit: function(){
            if($scope.mainForm.$invalid)
                return;

            var obj = angular.copy(this.model);
            delete obj.id;

            HaucanService.thucpham.edit(this.model.id, obj).then(function(response){
                if(response.status == 'success') {
                    angular.extend($scope.thucpham.select_row , obj);
                    $scope.thucpham.reset();
                    AlertService.edit.success();
                } else {
                    $scope.thucpham.reset();
                    AlertService.edit.success();
                }
            });

        },
        add: function(){
            if($scope.mainForm.$invalid)
                return;
            HaucanService.thucpham.save($scope.thucpham.model).then(function(response){
                if(response.status == 'success') {
                    $scope.listthucpham.push(response.data)
                    $scope.thucpham.reset();

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
            HaucanService.thucpham.remove(item.id).then(function(response){
                if(response.status == 'success'){
                    $scope.listthucpham.remove(item);
                    AlertService.remove.success();
                } else {
                    AlertService.remove.error();
                }
            })
        },
    }

    $scope.thucpham.reset();
});