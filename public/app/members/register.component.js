(function(){
    const registerComponent = angular.module("app");
    registerComponent.component("registrar",{
        templateUrl:"app/views/registrations.html",
        controller: function registerController (DbContextSvc){
            
            this.saveRecord = function(){
                
            }
        }
    })
}())