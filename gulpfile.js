'use strict';

//Dependencies
var gulp   = require('gulp'),
  concat   = require('gulp-concat'),
  rename   = require('gulp-rename'),
  postcss  = require('gulp-postcss'),
  cssnext  = require('postcss-cssnext'),
  atImport = require('postcss-import'),
  cssnano  = require('cssnano');


//Environments
var src   = './static/src/',
    dist  = './static/dist/';


//Tasks

//CSS
gulp.task('css', function() {
  var processors = [
    cssnext({ browsers: 'last 2 versions' }),
    atImport,
    cssnano
  ];
  return gulp.src(src + 'css/src.css')
    .pipe( postcss(processors) )
    .pipe(rename('nuroute.css'))
    .pipe(gulp.dest(dist + 'css') )
});

//Default
gulp.task('default', function() {
  gulp.watch(src + 'css/**/*.css', ['css']);
});
