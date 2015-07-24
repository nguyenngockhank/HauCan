angular.module("app.directives", [
	'app.directives.mydatatable'
])
.directive('updateTitle', ['$rootScope', '$timeout',
	function($rootScope, $timeout) {
		return {
		  link: function(scope, element) {
		    var listener = function(event, toState) {
		      var title = 'Solider Manager';
		      if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle;

		      $timeout(function() {
		        element.text(title);
		      }, 0, false);
		    };

		    $rootScope.$on('$stateChangeSuccess', listener);


		  }
		};
	}
])
.filter('vnDateFormat', function() {
  	return function(input) {
  		if(!input) return 'Tận cmn thế';

  		var date = input.getDate(), month = input.getMonth(), year = input.getFullYear();
  		if(date < 10) {
        date = '0' + date;
      }
      ++month;
      if(month < 10) {
        month = '0' + month
      }

    	return date + '/' + month + '/' + year;
  	};
})
.filter('dbDateFormat', function() {
  	return function(input) {
  		if(!input) return 'Tận cmn thế';

  		var date = input.getDate(), month = input.getMonth(), year = input.getFullYear();
  		if(date < 10) {
  			date = '0' + date;
  		}
       ++month;
  		if(month < 10) {
  			month = '0' + month
  		}

    	return year + '-' + month + '-' + date;
  	};
})
;