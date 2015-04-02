/**
 * Created by cjcoffey on 4/2/2015.
 */
/// <reference path="../_app.ts" />

module app {
    export interface IPlaylistScope extends ng.IScope {

    }

    export class PlaylistCtrl {
        constructor(private $scope: IPlaylistScope,
                    private $stateParams){
        }
    }
}