var gulp         = require('gulp');
var notify       = require('gulp-notify');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').sass;
var cssmin       = require('gulp-cssmin');

var settings = {};

gulp.task('styles', function() {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(sass(settings))
    .on('error', handleErrors)
    .pipe(autoprefixer({ browsers: ['last 2 versions', '> 5%'] }))
    .pipe(sourcemaps.write('.'))
    .pipe(cssmin())
    .pipe(gulp.dest(config.dest))
    // .pipe(gulp.dest(config.wp))
    .pipe(browserSync.stream())
    .pipe(notify('Sass complete'));
});
