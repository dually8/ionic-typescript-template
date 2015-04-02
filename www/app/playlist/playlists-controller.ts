/**
 * Created by cjcoffey on 4/2/2015.
 */
/// <reference path="../_app.ts" />

module app {
    export interface IPlaylistsScope extends ng.IScope {
        playlists: any;
    }

    export class PlaylistsCtrl {
        constructor(private $scope: IPlaylistsScope){
            $scope.playlists = [
                { title: 'Reggae', id: 1 },
                { title: 'Chill', id: 2 },
                { title: 'Dubstep', id: 3 },
                { title: 'Indie', id: 4 },
                { title: 'Rap', id: 5 },
                { title: 'Cowbell', id: 6 }
            ];
        }
    }
}