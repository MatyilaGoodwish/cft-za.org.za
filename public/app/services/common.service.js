(function () {
    const DbContextSvcApp = angular.module("app");
    DbContextSvcApp.service("DbContextSvc", function () {
        this.gainPermissionAccess = function (pin) {
            let attempt = firebase.auth().signInWithEmailAndPassword("mothibe.t@cft-za.org.za", btoa("mothibe.t@cft-za.org.za:786") + pin)
            attempt.then(function (user) {
                swal("Access Granted", "You have been granted access to the system", "success")
            });
            attempt.catch(function (error) {
                swal("Security Check", error.message, "error");
                this.authStatusCheck();
            });
        }
        this.saveToDB = function (memberDetails) {
            swal(memberDetails);
        }
        this.createNewAdmin = function (pin) {
            firebase.auth().createUserWithEmailAndPassword("mothibe.t@cft-za.org.za", btoa("mothibe.t@cft-za.org.za:786") + pin)
                .catch(function (error) {
                    swal("Security Error", "Admin creation failed", "error");
                })
        }
        this.revokePermissions = function () {
            firebase.auth().signOut();
        }
        this.authStatusCheck = function () {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    //swal("Access Granted", `${user.email} You have been granted access to the system`, "success")
                } else {
                    swal("Access Locked", `Access has been locked to retricted only authorized personnel`, "info")
                }
            })
        }
    })
}())