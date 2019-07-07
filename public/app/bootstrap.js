(function(){
    const app = angular.module("app", ["ngRoute"]);
    app.config(function($routeProvider, $locationProvider){
        $locationProvider.hashPrefix("");
        $routeProvider
        .when("/", {
            template: "<group></group>"
        })
        .when("/waiting", {
            template: "<waiting></waiting>",
            resolves: function(){
                swal("test resolves");
            }
        })
        .when("/new", {
            template: "<new></new>",
            resolves: function(){
                swal("test resolves");
            }
        })
        .when("/forms", {
            template: "<forms></forms>",
            resolves: function(){
                swal("test resolves");
            }
        })
        .when("/demand", {
            template: "<demand></demand>",
            resolves: function(){
                swal("test resolves");
            }
        })
        .when("/lostforms", {
            template: "<lostforms></lostforms>",
            resolves: function(){
                swal("test resolves");
            }
        })
        .when("/subsidy", {
            template: "<subsidy></subsidy>",
            resolves: function(){
                swal("test resolves");
            }
        })
        .when("/register",{
            template: "<registrar></registrar>"
        })
        .otherwise({
            redirectTo: "/"
        })
    });
}());