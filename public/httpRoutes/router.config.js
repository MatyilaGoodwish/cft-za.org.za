(function () {
    const main = angular.module("InitApp", ["ngRoute"]);
    main.config(function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix("");
        $routeProvider
            .when("/", {
                template: "<search></search>"
            })
            .when("/logon", {
                template: "<logon></logon>"
            })
            .when("/register", {
                template: "<register></register>"
            })
            .otherwise({
                redirectTo: "/"
            })
    });
})()