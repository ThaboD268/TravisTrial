//All used modules.
var gulp = require('gulp');
var babel = require('gulp-babel');
var runSeq = require('run-sequence');
var plumber = require('gulp-plumber');

gulp.task('travis', ['build','testServerJS'], function(){
process.exit(0);
}
