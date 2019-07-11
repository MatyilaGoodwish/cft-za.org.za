(function () {
    const main = angular.module("InitApp");
    //Registration Component
    main.component("register", {
        templateUrl: "templates/register.html",
        controller: ["ExceptionsSvc", "UpdateSvc", "adminUserSvc", "$scope","$location",
            function (ExceptionsSvc, UpdateSvc, adminUserSvc, $scope, $location) {
                this.member = this.member || {};
                this.cancel = function (){
                   $location.path("/").replace();
                }
                this.addRecord = function () {
                     if(!this.member.fullnames){
                        swal("Basic information","Complete your fullnames","error");
                     }else if(!this.member.surname){
                        swal("Basic information","Complete your surname","error");
                     }else if(!this.member.dob){
                        swal("Basic information","Complete your date of birth","error");
                     }else if(!this.member.cellphone){
                        swal("Basic information","Complete your cellphone","error");
                     }else{
                        adminUserSvc.systemUserAuthLogin(this.member);
                     }
                }
            }]
    });
}())