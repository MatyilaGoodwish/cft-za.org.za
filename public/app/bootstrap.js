(function(){
    const app = angular.module("app", ["ngRoute"]);

    app.service("checkAuth", function(){

    })

    app.config(function($routeProvider, $locationProvider, checkAuth){
        $locationProvider.hashPrefix("");
        $routeProvider
        .when("/", {
            template: "<group></group>"
        })
        .when("/waiting", {
            template: "<waiting></waiting>",
            resolve: {
                message: function(){
                   firebase.auth().onAuthStateChanged(function(user){
                       if(user){
                        swal("good")
                       }else{
                           swal("not good")
                       }
                   })
                }
            }
        })
        .when("/new", {
            template: "<new></new>",
            resolve: {
                message: function(){
                    swal("test resolve");
                }
            }
        })
        .when("/forms", {
            template: "<forms></forms>",
            resolve: {
                message: function(){
                    swal("test resolve");
                }
            }
        })
        .when("/demand", {
            template: "<demand></demand>",
            resolve: {
                message: function(){
                    swal("test resolve");
                }
            }
        })
        .when("/lostforms", {
            template: "<lostforms></lostforms>",
            resolve: {
                message: function(){
                    swal("test resolve");
                }
            }
        })
        .when("/subsidy", {
            template: "<subsidy></subsidy>",
            resolve: {
                message: function(){
                    swal("test resolve");
                }
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