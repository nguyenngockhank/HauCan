angular.module("app.modules", [
    "app.modules.haucan", 
    'app.modules.services'
    // "app.modules.controller", 
])

.config(function($stateProvider) {
    $stateProvider.state("modules", {
        abstract: true,
        views: {
            "root": {
                templateUrl: "common/views/structure.html",
              //  controller: "ModulesController"
            }
        }
    })
})
