(function () {
  const CommonQueriesAppModule = angular.module("app");
  CommonQueriesAppModule.component("waiting", {
    templateUrl: "app/views/waiting.html",
    controller: [function () {
      this.findProfile = function () {
        if (this.searchContext) {
          let housingRef = firebase.firestore().collection("housing");
          let housingMemberRef = housingRef.doc(this.searchContext);
          housingMemberRef.get()
            .then(snap => {
              if (!snap.exists) {
                swal("Record not found", "Does exists wait", "error");
              } else {
                swal('Active Member',`
                      Full Names:\t${snap.data().fullnames} \n
                      Last Name:\t${snap.data().lastname}\n
                      Application Type:\t${snap.data().application}
                  `, 'success');

                  let res = $('#waitingListGrid').kendoGrid({
                      dataSource: {
                        data: snap.data()
                      }
                  });
                  res.sync();
              }
            })
        } else {

        }
      }
    }]
  })
  CommonQueriesAppModule.component("new", {
    templateUrl: "app/views/new.html",
    controller: [function () {

    }]
  })
  CommonQueriesAppModule.component("subsidy", {
    templateUrl: "app/views/subsidy.html",
    controller: [function () {

    }]
  })
  CommonQueriesAppModule.component("lostforms", {
    templateUrl: "app/views/lostforms.html",
    controller: [function () {

    }]
  })
  CommonQueriesAppModule.component("forms", {
    templateUrl: "app/views/formsc.html",
    controller: [function () {

    }]
  })
  CommonQueriesAppModule.component("demand", {
    templateUrl: "app/views/demand.html",
    controller: [function () {

    }]
  })
}())