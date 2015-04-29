/// <reference path="../_app.ts" />

module app.models {
    'use strict';

    export interface IPlaylist {
        title: string;
        songs: string[];
    }

    export class Playlist implements IPlaylist {
        title: string;
        songs: string[];
    }
}