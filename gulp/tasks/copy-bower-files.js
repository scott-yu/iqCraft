/**
 * Copy less/css and output into build.
 */

var gulp = require('gulp');
var changed = require('gulp-changed');
var handleErrors = require('../util/handleErrors');

gulp.task('copy-bower-files', function(){
  var dest = './build/bower_components';

  var files = [
    'client/bower_components/bootstrap/dist/css/bootstrap.css',
    'client/bower_components/font-awesome/css/font-awesome.css',
      'client/bower_components/select2/select2.css',
      'client/bower_components/select2/select2.png',
      'client/bower_components/select2/select2-spinner.gif'
  ];

  return gulp.src(files)
      .pipe(changed(dest)) // Ignore unchanged files
      .on('error', handleErrors)
      .pipe(gulp.dest(dest));
});
