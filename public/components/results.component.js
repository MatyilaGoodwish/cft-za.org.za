(function () {
    const main = angular.module("InitApp");
    //search Component
    main.component("results", {
        templateUrl: "templates/results.html",
        controller: [function () {
                this.member = this.member || {}; 
               
                let taskPopulateResults = new Promise(function(resolve,reject){
                    return firebase.auth().onAuthStateChanged(function(user){
                        resolve(user);
                    })
                })
                taskPopulateResults.then(function(currentUser){
                    //console.log(currentUser);
                    sessionStorage.setItem("currentId", currentUser.email.substr(0,13));
                    firebase.firestore()
                    .collection(sessionStorage.getItem("currentId"))
                    .doc("housing")
                    .get()
                    .then(function(snap){
                        sessionStorage.setItem("profile", JSON.stringify( snap.data() ));
                    })
                });      

                this.member = JSON.parse(sessionStorage.getItem("profile"));            
                this.member.status = "pending....";
                this.cancel = function(){
                    firebase.auth().signOut();
                }
            }]
    });

    
}())