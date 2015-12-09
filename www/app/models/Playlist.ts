/// <reference path="../_app.ts" />

module app.models {
	"use strict";

	export interface IPlaylist {
		id: number;
		title: string;
		songs?: string[];
	}

}