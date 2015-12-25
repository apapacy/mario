var gulp = require('gulp'),
    rjs = require('gulp-requirejs');

gulp.task('requirejsBuild', function() {
    rjs({
        baseUrl: "./assets/js/config_application.js",
        out: './out.js',
        shim: {
            // standard require.js shim options
        },
        // ... more require.js options
    })
        .pipe(gulp.dest('./')); // pipe it to the output DIR
});
