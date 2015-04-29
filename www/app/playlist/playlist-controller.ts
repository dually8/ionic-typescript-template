/// <reference path="../_app.ts" />

module app.controllers {
    export interface IPlaylistScope extends ng.IScope {

    }

    export class PlaylistCtrl {
        constructor(private $scope: IPlaylistScope,
                    private $stateParams){
        }
    }
}