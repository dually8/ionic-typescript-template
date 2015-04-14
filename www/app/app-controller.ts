/// <reference path="./_app.ts" />

module app {
    export interface IAppControllerScope extends ng.IScope {

    }

    export class AppCtrl {
        constructor(private $scope: IAppControllerScope){

        }
    }
}