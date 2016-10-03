'use strict'

// Dependencies
var gulp = require('gulp')
var rename = require('gulp-rename')
var postcss = require('gulp-postcss')
var cssnext = require('postcss-cssnext')
var atImport = require('postcss-import')
var cssnano = require('cssnano')

// Environments
var src = './static/src/'
var dist = './static/dist/'

// TASKS

// CSS
gulp.task('css', function () {
  var processors = [
    cssnext({ browsers: 'last 2 versions' }),
    atImport,
    cssnano
  ]
  return gulp.src(src + 'css/src.css')
    .pipe(postcss(processors))
    .pipe(rename('nuroute.css'))
    .pipe(gulp.dest(dist + 'css'))
})

// Default
gulp.task('default', function () {
  gulp.watch(src + 'css/**/*.css', ['css'])
})
