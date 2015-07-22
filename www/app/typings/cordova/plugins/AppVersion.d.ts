// Type definitions for Apache Cordova Device plugin.
// Project: https://github.com/whiteoctober/cordova-plugin-app-version
// Definitions by: CJ
// Definitions: Just here currently
// 
// Licensed under the MIT license. 

/**
 * This plugin defines a global device object, which describes the device's hardware and software.
 * Although the object is in the global scope, it is not available until after the deviceready event.
 */

interface Cordova {
    /**
     * This plugin provides an API for taking pictures and for choosing images from the system's image library.
     */
    getAppVersion: AppVersion;
}


interface AppVersion {
    getAppName(
        success: (data: string) => void): void;
    getPackageName(
        success: (data: string) => void): void;
    getVersionCode(
        success: (data: string) => void): void;
    getVersionNumber(
        success: (data: string) => void): void;
}