angular.module( "app.modules.haucan.controllers.thucdon", [
])
.controller("HaucanThucdonController", function ($scope, HaucanService, $filter) {
    var dbDateFormat = $filter('dbDateFormat');

	HaucanService.monan.all('ten').then(function(response){
        $scope.listmonan = response.data;
        return  HaucanService.thucpham.all('ten');
    }).then(function(response){
        $scope.listthucpham = response.data;
    });

    var processAction = (function(){
        this.addThucdon = function(type, item){
            var lich = $scope.action.last_lich;
            lich.thucdon.push({type: type, id: item.id, item: item});
            console.log(lich.thucdon)
        };
        this.isExistInThucdon = function(type, item) {
            var lich = $scope.action.last_lich;
            var index = _.findIndex(lich.thucdon , {type: type, id: item.id});
            return (index >= 0) ;
        };

        return this;
    })();

    $scope.action = {
        last_lich : null,
        last_lich_db: null,
    	selectLich: function(item) {
            if(this.last_lich!=null)
                this.last_lich.selected = false;

            this.last_lich = item;
            this.last_lich.selected =true;

            /* */
            var index = _.findIndex($scope.list_lichan , {buoi: item.buoi, ngay: item.ngay});
            if(index > -1)
                this.last_lich_db = $scope.list_lichan[index];
    	},
    	unselectLich: function(item) {
    		item.selected = false;
            this.last_lich = null;
            if(this.last_lich_db !=null) {
                // prepare model to send to server
                var model = {id: this.last_lich_db.id, thucdon: []};
                item.thucdon.forEach(function (value) {
                    model.thucdon.push({type: value.type, id: value.id})
                })

                // send to server
                console.log('SEND TO SERVERR')
                HaucanService.thucdon.save(model).then(function(response){

                });

            }
    	},
        changeStartDate: function(){
            console.log('CHANGE')
            $scope.gui.setStartDate($scope.gui.start_date);
            $scope.gui.setEndDate();
            $scope.gui.initData();
            HaucanService.lichan.search($scope.gui.start_date).then(function(response){
                $scope.list_lichan = response.data;
                // $scope.list_lichan.forEach(function(data){
                //     data.ngay =  dbDateFormat(new Date(data.ngay));
                // })
            });
        },
        chooseThucpham: function(thucpham){
            if(this.last_lich == null) return;
            var exists = processAction.isExistInThucdon('thucpham', thucpham);
            if(!exists) {
                processAction.addThucdon('thucpham', thucpham);
            }

        },
        chooseMonan: function(monan){
            if(this.last_lich == null) return;
            var exists = processAction.isExistInThucdon('monan', monan);
            if(!exists) {
                processAction.addThucdon('monan', monan);
            }
        }
    }

    $scope.gui = {
    	start_date: null,
    	end_date: null,
    	arr_buoi: [
    		'Sáng', 'Trưa', 'Chiều'
    	],
    	arr_thu: [
    		'Thứ 2', 'Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7','Chủ nhật'
    	], 
    	data: null,
        setStartDate: function(d){
            var today = !!d ? new Date(d) : new Date();
            var day = today.getDay();

            this.start_date = new Date(today);
            if(day > 1) {
                this.start_date.setDate(today.getDate() - day + 1);     
            } else if(day < 1) {
                this.start_date.setDate(today.getDate() - 6);   
            }
        },
    	setEndDate: function(){
    		this.end_date = new Date();
    		this.end_date.setDate(this.start_date.getDate()+6) 
    	} ,
    	initData: function(){
            this.data =  [[],[],[]];
    		this.data.forEach(function(item, index){
				for(var i=0; i < 7; ++i) {
					var d = new Date();
                    d.setDate($scope.gui.start_date.getDate() + i);
                    var str_d  = dbDateFormat(d);
					item.push({
                        display: '',
						buoi: index, // 0 sáng, 1 chiều, 2 tối
						ngay: str_d,
						thucdon: []
					});
				}
		 
    		})
    	},
    	init: function(){
    		this.setStartDate();
		    this.setEndDate();
		    this.initData();
            HaucanService.lichan.search(this.start_date).then(function(response){
                $scope.list_lichan = response.data;
                console.log('LIST LICH AN', $scope.list_lichan)
                $scope.list_lichan.forEach(function(data){
                    data.ngay =  dbDateFormat(new Date(data.ngay));
                })
            });
    	}
    };

    $scope.gui.init();
    console.log($scope.gui.data)
    
});