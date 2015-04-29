/// <reference path="./_app.ts" />
/**
 * Created by cjcoffey on 3/20/2015.
 */

module app.services {
    'use strict';

    export interface IAppService {
        init(): ng.IPromise<any>;
    }

    export class AppService implements IAppService {

        constructor(private $ionicPlatform,
                    private $q: ng.IQService,
                    private dbService: app.services.DatabaseService) {

        }

        public init(): ng.IPromise<any>{
            var _this = this;
            var deferred = this.$q.defer();

            this.$ionicPlatform.ready(function(){
                _this.dbService.init();
                deferred.resolve();
            });

            return deferred.promise;
        }
    }
}