/**
 * Created by brian on 3/26/15.
 */

/// <reference path="../_app.ts" />
/**
 * Read about persistence syncing here
 * https://github.com/coresmart/persistencejs/blob/master/docs/sync.md
 *
 * Further reading:
 * https://gist.github.com/jgoux/10738978 -- Ionic/Ng service wrapper for WebSQL in Ionic
 * http://forum.ionicframework.com/t/how-to-sync-remote-json-data-with-sqlite/17773 -- Sync remote JSON data w/ SQLite
 * https://github.com/orbitaloop/WebSqlSync -- Sync API
 * http://www.raymondcamden.com/2012/04/03/adding-database-synchronization-to-your-phonegap-project -- DB Sync Phonegap
 *
 */
module app.services {
    'use strict';

    export interface IDatabaseService {
        addPlaylist(Playlist: app.models.IPlaylist): ng.IPromise<any>;
        removePlaylist(Playlist: app.models.IPlaylist): ng.IPromise<any>;
        getAllPlaylists(): ng.IPromise<app.models.IPlaylist[]>;
        clearAll(): ng.IPromise<any>;
        getPlaylistById(id:string): ng.IPromise<any>;
    }

    export class DatabaseService implements IDatabaseService{
        public persistence: any;
        public Playlist: any;
        public Item: any;
        private dbService: any;

        constructor (private $q: ng.IQService,
                     private $cordovaSQLite){
            var w : any = window;
            this.persistence = w.persistence;
        }



        private copyObjectProperties = function(fromObj: any, toObj: any) {
            for (var prop in fromObj) {
                toObj[prop] = fromObj[prop];
            }
        };

        public init() {
            this.persistence.store.cordovasql.config(
                this.persistence,
                'playlist.db',
                '0.0.1',                // DB version
                'Test database',        // DB display name
                5 * 1024 * 1024,        // DB size in bytes 5 * 1024 * 1024 = 5MB
                0                       // SQLitePlugin Background processing disabled
            )

            this.Playlist = this.persistence.define('Playlist', {
                title: "TEXT"
            });

            this.persistence.schemaSync();
        }

        public addPlaylist(playlist: app.models.IPlaylist): ng.IPromise<any> {
            var deferred = this.$q.defer();

            var query = this.Playlist.all();


            var p = new this.Playlist();
            this.copyObjectProperties(playlist, p);

            query.add(p);

            console.log("Add: " + p.Inspector + " " + p.id);

            this.persistence.flush(function(){
                //deferred.resolve();
            });

            query = this.Playlist.all().filter('id', '=', p.id);

            query.list(null, function(results) {
                results.forEach(function(r){
                    console.log("Result: ");
                    console.log(r);
                    deferred.resolve(r);
                });
            });

            return deferred.promise;
        }

        public removePlaylist(Playlist: app.models.IPlaylist): ng.IPromise<any> {
            var deferred = this.$q.defer();

            var query = this.Playlist.all();


            var p = new this.Playlist();
            this.copyObjectProperties(Playlist, p);

            query.remove(p);
            this.persistence.flush(function(){
                deferred.resolve();
            });

            return deferred.promise;
        }



        public clearAll(): ng.IPromise<any>{
            var deferred = this.$q.defer();

            var query = this.Playlist.all();

            query.list(null, function(results) {
                results.forEach(function(r){
                    console.log("removing...");
                    console.log(r);
                    query.remove(r);
                });
            });

            return deferred.promise;
        }

        public getPlaylistById(id: string): ng.IPromise<any>{
            var deferred = this.$q.defer();

            var query = this.Playlist.all().filter('id', '=', id);

            query.list(null, function(results) {
                results.forEach(function(r){
                    console.log("Result: ");
                    console.log(r);
                    deferred.resolve(r);
                });
            });

            return deferred.promise;
        }

        public getAllPlaylists(): ng.IPromise<app.models.IPlaylist[]> {
            var deferred = this.$q.defer();

            var query = this.Playlist.all();

            query.list(null, function(results) {
                console.log("getAllPlaylists: ");
                console.log(results);
                deferred.resolve(results);
            });

            return deferred.promise;
        }

    }
}