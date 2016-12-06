*Based off of Angular 2 AOT (Ahead Of Time) offline compilation example with Webpack*


This repository shows how to use the Angular 2 command line offline compiler ```ngc``` with Webpack.
Additionally it shows an alternative to ```ngc``` with ```@ngtools/webpack``` plugin used in the Angular CLI.

When the application starts (```npm start```) 
it generates the compiled files next to the modules and the components(```*.ngfactory.ts```).

There is a different entry point for the non compiled(```src/app/bootstrap.ts```)
and AOT compiled application(```src/app/bootstrap.aot.ts```).

The difference between the development and production version is minification with UglifyJS.
Both development and production builds create the AOT compiled files.

The application is bundled with Webpack from the bootstrap files and is available on ```http://localhost:9000```.
You can change between the different builds with commenting/uncommenting entry files in ```src/index.html```.

### Starting the application

There are two modes for the application.

Using the command line tool ```ngc``` for compilation is the default one 
and can be started with ```npm start```. It bundles once and watches for file changes with ```chokidar``` 
and re-runs the compilation on change.

The second one is using the ```@ngtools/webpack``` loader plugin for compilation
and can be started with ```npm run start-plugin```. It uses ```webpack-dev-server``` and 
live reloads on every file change.


*Left from starter repo, problems we might run into*
### Known issues

- [AOT related issues](https://github.com/angular/angular/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20aot)
- [AOT Webpack plugin related issues](https://github.com/angular/angular-cli/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20aot)
- Unmet dependencies when ```npm install```: delete the ```node_modules``` directory and do a clean install.
