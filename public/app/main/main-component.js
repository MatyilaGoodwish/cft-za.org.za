(function(){
    const app = angular.module("app");
    app.component("mainComponent", {
        templateUrl: "app/main/main.html",
        controller: function(){
             this.welcome = "Ready to launch";
        }
    })
}())