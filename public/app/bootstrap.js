(function(){
    const app = angular.module("app", ["ngRoute"]);

    app.config(function($routeProvider, $locationProvider){
        $locationProvider.hashPrefix("");
        $routeProvider
        .when("/", {
            template: "<group></group>"
        })
        .when("/waiting", {
            template: "<waiting></waiting>"
        })
        .when("/manage", {
            template: "<manage></manage>"
        })
        .when("/new", {
            template: "<new></new>"
        })
        .when("/forms", {
            template: "<forms></forms>"
        })
        .when("/demand", {
            template: "<demand></demand>"
        })
        .when("/lostforms", {
            template: "<lostforms></lostforms>"
        })
        .when("/subsidy", {
            template: "<subsidy></subsidy>"
        })
        .when("/register",{
            template: "<registrar></registrar>"
        })
        .otherwise({
            redirectTo: "/"
        })
    });
}());