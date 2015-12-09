/// <reference path="../_app.ts" />

module app.controllers {

	export class PlaylistCtrl {

		public playlistId: number;

		constructor(private $stateParams: ng.ui.IStateParamsService){
			this.playlistId = $stateParams["playlistId"];
		}
	}
}