var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function(callback) {
  runSequence('clean', [
    'styles:production',
    'webpack:production',
    'svg',
    'templates',
    'favicon',
    'images',
    'fonts'
  ], 'watch', callback);
});
