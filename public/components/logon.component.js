(function () {
    const main = angular.module("InitApp");
    //Login Component
    main.component("logon", {
        templateUrl: "templates/logon.html",
        controller: ["LoginSvc", "ExceptionsSvc", "$location",
            function (LoginSvc, ExceptionsSvc, $location) {
                this.logoImageUrlPath = "https://cft-za.org.za/home/wp-content/uploads/2019/06/Logo-1.png";
                this.attemptUserSignInService = function () {
                    if (this.username && this.password) {
                        LoginSvc.LoginUser(this.username, this.password);
                    } else {
                        ExceptionsSvc.InvalidUserException();
                    }
                }
                this.cancellation = function () {
                    $location.path("/").replace();
                }
            }]
    });
}())