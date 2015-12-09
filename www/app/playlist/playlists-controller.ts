/// <reference path="../_app.ts" />

module app.controllers {

	export class PlaylistsCtrl {

		public playlists: app.models.IPlaylist[];

		constructor() {
			this.playlists = [
				{ title: "Reggae", id: 1 },
				{ title: "Chill", id: 2 },
				{ title: "Dubstep", id: 3 },
				{ title: "Indie", id: 4 },
				{ title: "Rap", id: 5 },
				{ title: "Cowbell", id: 6 }
			];
		}
	}
}