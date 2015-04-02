/**
 * Created by cjcoffey on 4/2/2015.
 */
/// <reference path="./_app.ts" />

module app {
    export interface IAppControllerScope extends ng.IScope {
        loginData: any;
        modal: any;
        closeLogin(): void;
        login(): void;
        doLogin(): void;
    }

    export class AppCtrl {
        constructor(private $scope: IAppControllerScope,
                    $ionicModal,
                    $timeout: ng.ITimeoutService){
            // Form data for the login modal
            $scope.loginData = {};

            // Create the login modal that we will use later
            $ionicModal.fromTemplateUrl('app/login/login.html', {
                scope: $scope
            }).then(function(modal) {
                $scope.modal = modal;
            });

            // Triggered in the login modal to close it
            $scope.closeLogin = function() {
                $scope.modal.hide();
            };

            // Open the login modal
            $scope.login = function() {
                $scope.modal.show();
            };

            // Perform the login action when the user submits the login form
            $scope.doLogin = function() {
                console.log('Doing login', $scope.loginData);

                // Simulate a login delay. Remove this and replace with your login
                // code if using a login system
                $timeout(function() {
                    $scope.closeLogin();
                }, 1000);
            };
        }
    }
}