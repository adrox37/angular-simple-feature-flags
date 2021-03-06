'use strict';

var gulp = require('gulp');
var karma = require('gulp-karma');
 
var testFiles = []; /*= [
  'client/todo.js',
  'client/todo.util.js',
  'client/todo.App.js',
  'test/client/*.js'
];
 */

gulp.task('test', function() {
  // Be sure to return the stream 
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: 'test/karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero 
      throw err;
    });
});