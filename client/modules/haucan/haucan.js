angular.module("app.haucan", [
	"app.haucan.controllers",
    "app.haucan.services",
])

.config(function ($stateProvider) {
	
    $stateProvider
    // STRUCTURE
    .state("haucan", {
		abstract: true,
		data: {
			pageTitle: 'Hậu cần - Trang chủ'
		},
        views: {
            "root": {
                templateUrl: "common/views/structure.html",
                controller: "HaucanController"
            }
        }
    })
    // HOME
    .state("haucan.home", {
        url: "/haucan/home",
		title: 'Hậu Cần',
		data: {
			pageTitle: 'Hậu cần - Trang chủ'
		},
        views: {
            "main-content": {
                templateUrl: "modules/haucan/views/home.html",
                controller: "HaucanHomeController"
            }
        }
    })
})