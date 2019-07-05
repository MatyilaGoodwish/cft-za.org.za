(function(){
    const app = angular.module("app", ["ngRoute"]);
    app.config(function($routeProvider, $locationProvider){
        $locationProvider.hashPrefix("");
        $routeProvider
        .when("/", {
            template: "<group></group>"
        })
        .when("/register",{
            template: "<registrar></registrar>"
        })
        .otherwise({
            redirectTo: "/"
        })
    });
}());