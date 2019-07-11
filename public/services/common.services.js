(function () {
    const main = angular.module("InitApp");
    main.service("adminUserSvc", function () {
        this.systemUserAuthLogin = function (data) {
            firebase.auth().createUserWithEmailAndPassword(data.idnumber+"@cft-za.org.za", btoa(data.idnumber))
            .then(function(){
                firebase.firestore().collection(data.idnumber)
                .doc("housing")
                .set(data)
                .catch(function(error){
                    swal("Technical Error", error.message,"error");
                });
            })
            .catch(function (error) {
                if(error.code === "auth/email-already-in-use"){
                    swal("Registered Already", "Your information already in the database for housing kindly contact the office","info");
                }else{
                    swal("Technical Error", error.message,"error");
                }
            })
        }
       
    })

   

    main.service("SearchSvc", function ($location) {
        this.findMemberInRecords = function (data) {
            //swal("locating member in records " + memberIdentification);
            //firebase.auth().signInWithEmailAndPassword(data+"@cft-za.org.za")
        
            let verifyUserCredentials = new Promise(function(resolve,reject){
                let confirmation = prompt("Confirm your id number?");
                resolve(confirmation);
            });
            verifyUserCredentials.then(function(encodedBase64){
                // console.log(encodedBase64);
                firebase.auth().signInWithEmailAndPassword(data+"@cft-za.org.za", btoa(encodedBase64))
                .catch(function(error){
                    swal("Can't Confirm Records","Kindly contact office for more help your information cannot be verified", "info");
                })
            })
            verifyUserCredentials.then(function(){
                firebase.auth().onAuthStateChanged(function(user){
                    if(user){
                        swal("Records Found", "You are registered in the CFT housing database for more information kindly contact them regarding the update on your status", "success");
                        $location.path("/results").replace();
                    }
                })
            })
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