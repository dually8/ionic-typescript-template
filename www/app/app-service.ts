/// <reference path="./_app.ts" />
/**
 * Created by cjcoffey on 3/20/2015.
 */

module app.services {
    'use strict';

    export interface IAppService {
    }

    export class AppService implements IAppService {

        constructor(private $ionicPlatform,
                    private $q: ng.IQService) {

        }
    }
}