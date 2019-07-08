(function(){
    const manageMemberApp = angular.module("app");
    manageMemberApp.component("manage",{
        templateUrl: "app/views/manage.html",
        controller: ["$location",function($location){
            this.findProfile = function () {
                if (this.member && this.member.idnumber) {
                    let housingRef = firebase.firestore().collection("housing");
                    let housingMemberRef = housingRef.doc(this.member.idnumber);
                    housingMemberRef.get()
                        .then(snap => {
                            if (!snap.exists) {
                                swal("Record not found","Does exists wait", "error");
                            } else {
                                this.member = snap.data();
                            }
                        })
                } else {
                    
                }
            }
            this.update = function () {

            };
            this.cancel = function () {
                $location.path("/").replace();
            }
        }]
    })
})()