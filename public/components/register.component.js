(function (){
    const main = angular.module("InitApp");
     //Registration Component
     main.component("register", {
        templateUrl: "templates/register.html",
        controller: ["ExceptionsSvc","UpdateSvc","adminUserSvc", function (ExceptionsSvc, UpdateSvc, adminUserSvc) {
            this.addRecord = function (){
                firebase.auth().onAuthStateChanged(function(user){
                    if(!user){
                        //console.log("user not active yet on the system");
                        adminUserSvc.systemUserAuthLogin();
                    }else{
                        console.log(JSON.stringify(this.member));
                    }
                })
            }
        }]
    });
}())