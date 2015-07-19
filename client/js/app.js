angular.module('app', [
	"ui.router",
	'ngAnimate', 
	'toastr',
    'LocalStorageModule',
    "restangular",
    'ui.bootstrap',
    'angularify.semantic.sidebar',
    'isteven-multi-select',

	'app.directives',
	'app.values',
    'app.modules'
])
.run(function ($rootScope) {

})
.config(function (RestangularProvider, localStorageServiceProvider, $stateProvider) {
	
	
	var host = 'http://localhost:3000/';
	localStorageServiceProvider.setStorageType('localStorage');
	RestangularProvider.setBaseUrl(host + "api/");
	
	$stateProvider
	.state("init", {
		url: "/",
		resolve: {
			initHome: function($timeout, $state) {

			}
		}
	})
});


Array.prototype.remove_by_value = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

Array.prototype.remove = function(what){
	var pos = this.indexOf(what);

	if(pos == -1)
		return false;
	this.splice(pos, 1);
	return true;
}