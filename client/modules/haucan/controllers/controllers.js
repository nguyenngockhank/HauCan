angular.module( "app.haucan.controllers", [
])

.controller("HaucanController", function ($scope) {
    console.log(123123)
})
.controller("HaucanHomeController", function ($scope) {
	$scope.toggleLeft = function(){
		
	}

	  $scope.singleModel = 1;

  $scope.radioModel = 'Middle';

  $scope.checkModel = {
    left: false,
    middle: true,
    right: false
  };
    console.log(1231232)
});