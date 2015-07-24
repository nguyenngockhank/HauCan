angular.module("app.modules.haucan", [
	"app.modules.haucan.controllers",
    "app.modules.haucan.services",
])

.config(function ($stateProvider) {
	
    $stateProvider
    // STRUCTURE
    .state("modules.haucan", {
		abstract: true,
        templateUrl: "modules/haucan/views/structure.html",
        controller: "HaucanController",
		data: {
			pageTitle: 'Hậu cần - Trang chủ'
		},
    })
    // HOME
    .state("modules.haucan.home", {
        url: "/haucan/home",
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
     // THUC PHAM
    .state("modules.haucan.thucpham", {
        url: "/haucan/thucpham",
        data: {
            pageTitle: 'Hậu cần - Thực phẩm'
        },
        views: {
            "main-content": {
                templateUrl: "modules/haucan/views/thucpham.html",
                controller: "HaucanThucphamController"
            }
        }
    })
     // MON AN
    .state("modules.haucan.monan", {
        url: "/haucan/monan",
        data: {
            pageTitle: 'Hậu cần - Món ăn'
        },
        views: {
            "main-content": {
                templateUrl: "modules/haucan/views/monan.html",
                controller: "HaucanMonanController"
            }
        }
    })
     // THUC DON
    .state("modules.haucan.thucdon", {
        url: "/haucan/thucdon",
        data: {
            pageTitle: 'Hậu cần - Thực đơn'
        },
        views: {
            "main-content": {
                templateUrl: "modules/haucan/views/thucdon.html",
                controller: "HaucanThucdonController"
            }
        }
    })
})