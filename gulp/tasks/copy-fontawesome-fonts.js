/**
 * Copy less/css and output into build.
 */

var gulp = require('gulp');
var changed = require('gulp-changed');
var handleErrors = require('../util/handleErrors');

gulp.task('copy-fontawesome-fonts', function(){
  var dest = './build/fonts';

  var files = [
    'client/bower_components/font-awesome/fonts/*'
  ];

  return gulp.src(files)
      .pipe(changed(dest)) // Ignore unchanged files
      .on('error', handleErrors)
      .pipe(gulp.dest(dest));
});
