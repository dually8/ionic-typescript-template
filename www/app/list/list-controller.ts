/**
 * Created by brian on 3/26/15.
 */

/// <reference path="../_app.ts" />

module app.controllers {
    'use strict';

    interface IListControllerScope extends ng.IScope {
        playlists: app.models.IPlaylist[];
        formData: any;

        addPlaylist(): void;
    }

    export class ListController {
        constructor($scope: IListControllerScope,
                    appService: app.services.IAppService,
                    dbService: app.services.IDatabaseService) {

            $scope.formData = {
                title: ""
            };

            // Wait until AppService has called init on DatabaseService to query the db
            // Should probably load initial data into services here
            appService.init().then(function(){
                dbService.getAllPlaylists().then(function(result) {
                    $scope.playlists = result;
                });
            });

            $scope.addPlaylist = function() {
                var p = new app.models.Playlist();

                p.title = $scope.formData.title;

                dbService.addPlaylist(p).then(function(){
                    dbService.getAllPlaylists().then(function(result) {
                        $scope.playlists = result;
                    });
                });
            }
        }
    }
}