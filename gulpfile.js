var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

var paths = {
  sass: ['./scss/**/*.scss'],
  tsc: ['./www/app/**/*.ts']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
      .pipe(sass())
      .pipe(gulp.dest('./www/css/'))
      .pipe(minifyCss({
        keepSpecialComments: 0
      }))
      .pipe(rename({ extname: '.min.css' }))
      .pipe(gulp.dest('./www/css/'))
      .on('end', done);
});

gulp.task('watch', function () {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.tsc, ['tsc']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
      .on('log', function(data) {
        gutil.log('bower', gutil.colors.cyan(data.id), data.message);
      });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
        '  ' + gutil.colors.red('Git is not installed.'),
        '\n  Git, the version control system, is required to download Ionic.',
        '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
        '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task('ionic-plugin-install', function() {
  require('./plugins.json').forEach(function(plugin) {
    sh.exec('ionic plugin add ' + plugin, {async: false}, function(code, output) {
      console.log(output);
    });
  });
});

gulp.task('tsc', function () {
    sh.exec("tsc --target es5 --sourceMap --out ./www/js/app.js ./www/app/_app.ts");
});

gulp.task('ionic serve', ['sass', 'tsc'], function () {
    sh.exec("ionic serve");
});

gulp.task('ionic serve lab', ['sass', 'tsc'], function () {
    sh.exec("ionic serve --lab");
});

gulp.task('run android', ['sass', 'tsc'], function () {
    sh.exec("ionic run android");
});

gulp.task('run ios', ['sass', 'tsc'], function () {
    sh.exec("ionic run ios");
});

gulp.task('emulate-iPad2', ['sass', 'tsc'],function(){
    sh.exec("ionic emulate ios --target='iPad-2'");
});

gulp.task('emulate-iPhone6', ['sass', 'tsc'],function(){
    sh.exec("ionic emulate ios --target='iPhone-6'");
});

gulp.task('emulate-iPhone5s', ['sass', 'tsc'],function(){
    sh.exec("ionic emulate ios --target='iPhone-5s'");
});

gulp.task('emulate-iPhone6Plus', ['sass', 'tsc'],function(){
    sh.exec("ionic emulate ios --target='iPhone-6-Plus'");
});

gulp.task('emulate-iPhone4s', ['sass', 'tsc'],function(){
    sh.exec("ionic emulate ios --target='iPhone-4s'");
});

