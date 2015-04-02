/**
 * Created by cjcoffey on 3/12/2015.
 */
/// <reference path="./_app.ts" />

module app {

    export class AppConfig {
        get refreshMinsRealtimeMeterdata():Number {
            return 1;
        }

        get refreshMinsDailyMeterdata():Number {
            return 720;
        }

        get isDevice():Boolean {
            return !!window.cordova;
        }

        get hoursToShowInChart(): number {
            return 6;
        }

        isMockMode:Boolean = true;
        isDeveloperMode: Boolean = false;
        systemTimerInSec:number = 21;
        serviceTimerInSeconds: number = 60 * 5;

        screenLockTimeoutInMin = 20; //20 minutes

        events = {
            serviceTick  : 'service-tick',
            uiTick : 'ui-tick'
        }

        const = {

        }

    }

    var config = new AppConfig();

    'use strict';
    angular.module('starter', ['ngCordova','ionic'])
        .value('config', config)
        .controller("AppCtrl", AppCtrl)
        .controller("PlaylistsCtrl", PlaylistsCtrl)
        .controller("PlaylistCtrl", PlaylistCtrl)
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

                .state('app', {
                    url: "/app",
                    abstract: true,
                    templateUrl: "app/menu.html",
                    controller: 'AppCtrl'
                })

                .state('app.search', {
                    url: "/search",
                    views: {
                        'menuContent': {
                            templateUrl: "app/search/search.html"
                        }
                    }
                })

                .state('app.browse', {
                    url: "/browse",
                    views: {
                        'menuContent': {
                            templateUrl: "app/browse/browse.html"
                        }
                    }
                })
                .state('app.playlists', {
                    url: "/playlists",
                    views: {
                        'menuContent': {
                            templateUrl: "app/playlist/playlists.html",
                            controller: 'PlaylistsCtrl'
                        }
                    }
                })

                .state('app.single', {
                    url: "/playlists/:playlistId",
                    views: {
                        'menuContent': {
                            templateUrl: "app/playlist/playlist.html",
                            controller: 'PlaylistCtrl'
                        }
                    }
                });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/app/playlists');
        });
}