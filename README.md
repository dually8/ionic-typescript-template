# Ionic Typescript Starter

An application using Apache Cordova, Ionic Framework, and Typescript. Currently supporting iOS and Android.

## Requirements
 1. [node.js 0.10.36](http://nodejs.org/dist/v0.10.36/)
 2. Cordova and Ionic - ```$ [sudo] npm install -g cordova ionic```
 3. TypeScript 1.4 - ```$ [sudo] npm install -g typescript ```
 4. Gulp - ```$ [sudo] npm install -g gulp```
 5. Bower - ```$ [sudo] npm install -g bower```

## Tools
 1. [WebStorm](https://www.jetbrains.com/webstorm/)
 2. [SourceTree](https://www.atlassian.com/software/sourcetree/overview)
 3. [Invision](http://www.invisionapp.com/)
 4. [Sketch](http://bohemiancoding.com/sketch/)


## How to update Ionic Framework
1. ```$ [sudo] npm install ionic -g```
2. change bower.json to latest version: "ionic": "driftyco/ionic-bower#master"
3. ```$ bower update```
4. (```$ ionic lib update```) might also work

##Adding Crosswalk
```$ ionic browser add crosswalk```

###Set up
1. Navigate via the terminal (or cmd) to the root directory
2. ```$ [sudo] npm install```
3. ```$ gulp ionic-plugin-install```
4. ```$ gulp tsc```
5. ```$ ionic serve --lab```

####Architecture
The architecture of this template is a modified MVC framework. All application code is contained in the /www/app folder.
Models are placed in a models folder (e.g. /www/app/models/). Views and Controllers are placed in their own folder
together (e.g. /www/app/playlist/).  Services are placed in the common folder (e.g. /www/app/common/).  Main app views,
models, and controller are just placed in the /www/app/ folder (e.g. /www/app/app-controller.ts).