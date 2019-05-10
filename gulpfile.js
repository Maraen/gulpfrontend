var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('styles', function(){
    console.log('Done');

    return gulp
        .src('./assets/sass/**/*.scss')
        .pipe($.sass({outputStyle: 'compressed'}))
        .pipe($.autoprefixer({browsers: ['last 2 versions']}))
        .pipe($.rename({basename: 'styles'}))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
})

// Watch Task
gulp.task('watch', function(){
    gulp.watch('./assets/sass/**/*.scss', gulp.series('styles'));
    gulp.watch('./*.html').on('change', browserSync.reload)


    browserSync.init({
        server: { baseDir: "./" },
        port: 3000
    });

});