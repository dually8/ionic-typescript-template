/// <reference path="./_app.ts" />

module app.controllers {
    export interface IAppControllerScope extends ng.IScope {

    }

    export class AppCtrl {
        constructor(private $scope: IAppControllerScope){

        }
    }
}