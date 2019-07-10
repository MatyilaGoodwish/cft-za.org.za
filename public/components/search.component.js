(function () {
    const main = angular.module("InitApp");
     //search Component
     main.component("search", {
        templateUrl: "templates/search.html",
        controller: ["ExceptionsSvc","SearchSvc","$location", 
        function (ExceptionsSvc, SearchSvc, $location) {
            this.register = function () {
                $location.path("/register").replace();
            };
            this.search = function () {
                if(!this.searchContext){
                    ExceptionsSvc.RecordNotFound();
                }else if(this.searchContext.length < 13){
                    ExceptionsSvc.RecordNotValid();
                }
                else if(this.searchContext.length > 13){
                    ExceptionsSvc.RecordNotValid();
                }
                else{
                    SearchSvc.findMemberInRecords(this.searchContext);
                }
            };
        }]
    });
}())