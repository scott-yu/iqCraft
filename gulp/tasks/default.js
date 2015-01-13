/*
  The default task (called when you run `gulp` from cli)
*/

var gulp = require('gulp');
var connect = require('gulp-connect');



gulp.task('default', ['watch']);

gulp.task('connect', function() {
    connect.server({
        root: ['build/'],
        port: 4000,
        livereload: false
    });
});