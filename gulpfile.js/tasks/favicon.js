var gulp        = require('gulp');
var cache       = require('gulp-cached');
var notify      = require('gulp-notify');
var config      = require('../config').favicon;

gulp.task('favicon', function() {
  gulp.src(config.src)
    .pipe(cache())
    .pipe(gulp.dest(config.dest))
    // .pipe(gulp.dest(config.wp))
    .pipe(notify('Favicon complete'));
});