// this will use a private gulp instance
var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('precompile', function(cb) {
	gutil.log('precompiling project2');
    cb();
});

gulp.task('compile', [ 'precompile' ], function(cb) {
	gutil.log('compiling project2');
    cb();
});
 
gulp.task('watch', function() {
	gulp.watch(['watchfile.js'], function() {
		gutil.log('watched project2');
	});
});

gulp.task('default', [ 'compile' ]);
