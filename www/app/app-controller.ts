/// <reference path="./_app.ts" />

module app.controllers {

	export class AppCtrl {

		public loginData: any;
		public modal: ionic.modal.IonicModalController;

		constructor(private $scope: angular.IScope,
			private $ionicModal: ionic.modal.IonicModalService,
			private $timeout: angular.ITimeoutService) {

			// With the new view caching in Ionic, Controllers are only called
			// when they are recreated or on app start, instead of every page change.
			// To listen for when this page is active (for example, to refresh data),
			// listen for the $ionicView.enter event:
			//$scope.$on('$ionicView.enter', function(e) {
			//});

			// Form data for the login modal
			this.loginData = {};

			// Create the login modal that we will use later
			$ionicModal.fromTemplateUrl("login.html", {
				scope: this.$scope
			}).then((modal: ionic.modal.IonicModalController) => {
				this.modal = modal;
			});
		}

		// Triggered in the login modal to close it
		public closeLogin(): void {
			this.modal.hide();
		}

		// Open the login modal
		public login(): void {
			this.modal.show();
		}

		// Perform the login action when the user submits the login form
		public doLogin(): void {
			console.log("Doing login", this.loginData);

			// Simulate a login delay. Remove this and replace with your login
			// code if using a login system
			this.$timeout(() => {
				this.closeLogin();
			}, 1000);
		}
	}
}