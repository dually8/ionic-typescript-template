/// <reference path="../_app.ts" />

module app.controllers {
    export interface IPlaylistScope extends ng.IScope {
		playlistId: any;
    }

    export class PlaylistCtrl {
        constructor(private $scope: IPlaylistScope,
                    private $stateParams){
			$scope.playlistId = $stateParams.playlistId;
        }
    }
}