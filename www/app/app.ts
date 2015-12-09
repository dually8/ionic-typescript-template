/// <reference path="./_app.ts" />

module app {

	"use strict";
	angular.module("starter", ["ionic","ngCordova"])
		.constant("_", _)
		.controller("AppCtrl", app.controllers.AppCtrl)
		.controller("PlaylistsCtrl", app.controllers.PlaylistsCtrl)
		.controller("PlaylistCtrl", app.controllers.PlaylistCtrl)
		.run(function($ionicPlatform) {
			$ionicPlatform.ready(function() {
				// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
				// for form inputs)
				if(window.cordova && window.cordova.plugins.Keyboard) {
					cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
					cordova.plugins.Keyboard.disableScroll(true);
				}
				if(window.StatusBar) {
					window.StatusBar.styleDefault();
				}
			});
		})

		.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider

				.state("app", {
					url: "/app",
					abstract: true,
					templateUrl: "app/menu.html",
					controller: "AppCtrl as ctrl"
				})

				.state("app.search", {
					url: "/search",
					views: {
						"menuContent": {
							templateUrl: "app/search/search.html"
						}
					}
				})

				.state("app.browse", {
					url: "/browse",
					views: {
						"menuContent": {
							templateUrl: "app/browse/browse.html"
						}
					}
				})
				.state("app.playlists", {
					url: "/playlists",
					views: {
						"menuContent": {
							templateUrl: "app/playlist/playlists.html",
							controller: "PlaylistsCtrl as ctrl"
						}
					}
				})

				.state("app.single", {
					url: "/playlists/:playlistId",
					views: {
						"menuContent": {
							templateUrl: "app/playlist/playlist.html",
							controller: "PlaylistCtrl as ctrl"
						}
					}
				});
			// if none of the above states are matched, use this as the fallback
			$urlRouterProvider.otherwise("/app/playlists");
		});
}