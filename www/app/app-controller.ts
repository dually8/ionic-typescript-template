/// <reference path="./_app.ts" />

module app.controllers {
    export interface IAppControllerScope extends ng.IScope {
    	loginData: any;
    	modal: any;
    	closeLogin(): void;
    	login(): void;
    	doLogin(): void;
    }

    export class AppCtrl {
        constructor(private $scope: IAppControllerScope,
        			private $ionicModal,
        			private $timeout){
        	  // With the new view caching in Ionic, Controllers are only called
			  // when they are recreated or on app start, instead of every page change.
			  // To listen for when this page is active (for example, to refresh data),
			  // listen for the $ionicView.enter event:
			  //$scope.$on('$ionicView.enter', function(e) {
			  //});
			  
			  // Form data for the login modal
			  $scope.loginData = {};

			  // Create the login modal that we will use later
			  $ionicModal.fromTemplateUrl('login.html', {
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