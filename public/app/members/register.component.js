(function(){
    const registerComponent = angular.module("app");
    registerComponent.component("registrar",{
        templateUrl:"app/views/registrations.html",
        controller: ["DbContextSvc", "$location",
            function registerController (DbContextSvc, $location){
                this.cancel = function(){
                    $location.path("/").replace();
                }
                this.saveRecord = function(){
                    firebase.firestore().collection("housing").doc(this.member.idnumber).set({
                        ref: this.member.ref || "incomplete",
                        fullnames: this.member.fullnames || "incomplete",
                        lastname: this.member.surname || "incomplete",
                        title: this.member.title || "incomplete",
                        race: this.member.race || "incomplete",
                        application: this.member.application || "incomplete",
                        nationality: this.member.nationality || "incomplete",
                        adddress: this.member.address || "incomplete",
                        province : this.member.province || "incomplete",
                        idnumber: this.member.idnumber || "incomplete",
                        contact: this.member.contact || "incomplete",
                        gender: this.member.gender || "incomplete",
                        maritalstatus: this.member.maritalstatus || "incomplete",
                        spouse: this.member.spouse || "incomplete"
                    })
                    .then(function(){
                        swal("Confirmation", "Record filed in the database", "success");
                    })
                    .catch(function(error){
                       swal("Permission", error.message, "error");
                    })
                }
            }
        ]
    })
}())