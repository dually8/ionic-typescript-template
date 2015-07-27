# Ionic Typescript Starter

An application using Apache Cordova, Ionic Framework, and Typescript. Currently supporting iOS and Android.

## Requirements
 1. [node.js](https://nodejs.org/)
 2. Cordova and Ionic - ```$ [sudo] npm install -g cordova ionic```
 3. TypeScript 1.4 - ```$ [sudo] npm install -g typescript@1.4 ```
     1. If in windows, download [typescript 1.4](http://www.typescriptlang.org/#Download)
 4. Gulp - ```$ [sudo] npm install -g gulp```
 5. Bower - ```$ [sudo] npm install -g bower```

## How to update project
1. ```$ [sudo] npm install ionic -g```
2. Change bower.json to latest version: "ionic": "driftyco/ionic-bower#master"
3. ```$ bower update```
    - Though you may have to use ```$ sudo bower install``` 
4. (```$ ionic lib update```) might also work

## Adding Crosswalk
```$ ionic browser add crosswalk```

### Set up
1. Navigate via the terminal (or cmd) to the root directory
2. ```$ [sudo] npm install``` (Installs dependencies)
3. ```$ ionic state reset``` (Removes all plugins, if any, and re-adds them.  Grabs list from package.json)
4. ```$ gulp tsc``` (Compiles typescript)
5. ```$ ionic serve [--lab]``` (Serves app in a node instance)

#### Architecture
 - The architecture of this template is a modified MVC framework. All application code is contained in the /www/app folder.
 - Models are placed in a models folder (e.g. /www/app/models/). 
 - Views and Controllers are placed in their own folder together (e.g. /www/app/playlist/). 
 - Services are placed in the common folder (e.g. /www/app/common/).  
 - Main app views, models, and controller are just placed in the /www/app/ folder (e.g. /www/app/app-controller.ts).

#### Extras
 - When adding a plugin, make sure to use ````ionic plugin add <plugin>```` rather than ````cordova plugin add <plugin>```` in order to ensure that the plugin is added to the package.json.
 - To add a plugin without saving it to the package.json, add the --nosave argument to the add plugin command (e.g. ````$ ionic plugin add <plugin> --nosave ````)
 - [Install tsd](https://github.com/DefinitelyTyped/tsd)
   - ````$[sudo] npm install tsd -g````
   - Using tsd
        - ````$ cd www/app````
        - ````$ tsd init````(this creates the typings folder and the tsd.json file
    - Installing the packages
        - ````$ tsd install angular cordova-ionic cordova --save --resolve````

## Updating npm packages
1.	````sudo npm install –g npm-check-updates````
    - installs npm-check-updates package
2.	````sudo rm –rf node_modules/````
    - removes the node_modules folder so we can update it.
3.	````npm-check-updates –u````
    - updates your package.json with the latest npm packages
4.	````sudo npm install````
    - installs latest node packages from your package.json to the newly created node_modules folder.
