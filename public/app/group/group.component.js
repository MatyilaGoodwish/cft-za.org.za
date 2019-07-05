(function () {
    const app = angular.module("app");
    app.component("group", {
        templateUrl: "app/views/authorization.html",
        controller: function (DbContextSvc) {
            this.padlockImage = "images/lock.png";
            this.avatarImage = "images/avatar.png";
            this.house = "images/house.png";
            this.pincodeImage = "images/pin.png";
            this.revokeAccess = function () {
                DbContextSvc.revokePermissions();
                DbContextSvc.authStatusCheck();
            }
            this.getPermission = function () {
                if (this.capture !== 8) {
                    this.captureExceptionError();
                } else if (this.pin.split("").length < 1) {
                    this.pinException();
                } else {
                    DbContextSvc.gainPermissionAccess(this.pin);
                    DbContextSvc.authStatusCheck();
                }
            }
            this.databaseConnectionException = function () {
                swal("Database Connection", "Database not yet connected", "error");
            }
            this.captureExceptionError = function () {
                swal("Verify Security", "You failed the security question", "error");
            }
            this.pinException = function () {
                swal("Verify PIN", "You failed to enter PIN", "error");
            }
        }
    })
}())