(function () {
    const main = angular.module("InitApp");
    main.service("adminUserSvc", function () {
        this.systemUserAuthLogin = function () {
            firebase.auth().signInWithEmailAndPassword("system.administrator@cft-za.org.za", btoa("engineering"))
                .catch(function (error) {
                    console.log(error.message);
                    firebase.auth().createUserWithEmailAndPassword("system.administrator@cft-za.org.za", btoa("engineering"))
                        .catch(function (error) {
                            console.log(error.message);
                        })
                })
        }
    })
    main.service("SearchSvc", function () {
        this.findMemberInRecords = function (memberIdentification) {
            swal("locating member in records " + memberIdentification);
        }
    })
    main.service("UpdateSvc", function () {
        this.updateRecordsIn = function (memberRecords) {
            swal("test service")
            // console.log(memberRecords);
        }
    })
    //Exception Handling Error Messages Service
    main.service("ExceptionsSvc", function () {
        this.InvalidUserException = function () {
            swal("Invalid User", "Check your username and password", "error");
        }
        this.loginSuccessNotify = function () {
            swal("Login Success", "User has been signed In succesfully", "success");
        }
        this.RecordNotFound = function () {
            swal("Record Information", "Record not found in the system", "info");
        }
        this.RecordNotValid = function () {
            swal("Record Invalid", "Record not valid or too short for ID Number", "info");
        }
    });

    //Authentication Service
    main.service("LoginSvc", function (ExceptionsSvc, $location) {
        this.LoginUser = function (emailAccount, accountPassword) {
            firebase.auth().signInWithEmailAndPassword(emailAccount, accountPassword)
                .then(function () {
                    ExceptionsSvc.loginSuccessNotify();
                    //$location.path("/dashboard").replace();
                })
                .catch(function (error) {
                    //dynamic error response
                    swal("Login Error", error.message, "error");
                })
        }
    })


}())