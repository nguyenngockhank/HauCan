angular.module('app', [
	"ui.router",
	'app.directives',
    'app.haucan',
    'LocalStorageModule',
    "restangular",
    'ui.bootstrap',
    'angularify.semantic.sidebar'
])
.run(function ($rootScope) {

})
.config(function (RestangularProvider, localStorageServiceProvider, $stateProvider) {
	
	
	var host = 'http://127.0.0.1/';
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
