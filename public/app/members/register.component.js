(function () {
    const registerComponent = angular.module("app");
    registerComponent.component("registrar", {
        templateUrl: "app/views/registrations.html",
        controller: ["DbContextSvc", "$location",
            function registerController(DbContextSvc, $location) {
                this.cancel = function () {
                    $location.path("/").replace();
                }
                this.writeRecord = function () {
                    firebase.firestore().collection("housing").doc(this.member.idnumber).set({
                        ref: this.member.ref || "incomplete",
                        fullnames: this.member.fullnames || "incomplete",
                        lastname: this.member.surname || "incomplete",
                        title: this.member.title || "incomplete",
                        race: this.member.race || "incomplete",
                        application: this.member.application || "incomplete",
                        nationality: this.member.nationality || "incomplete",
                        adddress: this.member.address || "incomplete",
                        province: this.member.province || "incomplete",
                        idnumber: this.member.idnumber || "incomplete",
                        contact: this.member.contact || "incomplete",
                        gender: this.member.gender || "incomplete",
                        maritalstatus: this.member.maritalstatus || "incomplete",
                        spouse: this.member.spouse || "incomplete"
                    })
                        .then(function () {
                            swal("Confirmation", "Record filed in the database", "success");
                        })
                        .catch(function (error) {
                            swal("Notice", error.message, "error");
                        })
                }
                this.saveRecord = function () {
                    if (this.member && this.member.idnumber) {
                        let housingRef = firebase.firestore().collection("housing");
                        let housingMemberRef = housingRef.doc(this.member.idnumber);
                        housingMemberRef.get()
                            .then(snap => {
                                if (!snap.exists) {
                                    this.writeRecord();
                                } else {
                                    this.memberExistsException();
                                }
                            })
                    } else {
                        this.memberIdException();
                    }
                }
                this.memberIdException = function () {
                    swal("Member Capture Notice", "Kindly complete the form properly check ID Number very important or contact support", "info");
                }
                this.memberExistsException = function () {
                    swal("Member exists", "Kindly use manage user or query the existing member status, You are required to update an existing member", "info");
                }
            }
        ]
    })
}())