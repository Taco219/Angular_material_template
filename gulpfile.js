var gulp = require('gulp');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var ngAnnotate = require('gulp-ng-annotate');
var minify = require('gulp-minify');
var source = require('vinyl-source-stream');
var historyFallback = require('connect-history-api-fallback');

var browserSync = require('browser-sync').create();

gulp.task('browserify', function () {
    return browserify({entries: 'src/js/main.js', debug: true})
        .transform('babelify', { presets: ["es2015"] })
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(ngAnnotate())
        .pipe(minify())
        .pipe(gulp.dest('./assets/js'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch('src/js/**/*.js', ['browserify']);
    gulp.watch('src/**/*.html',  browserSync.reload);
    gulp.watch('index.html',  browserSync.reload);
});

gulp.task('refresh', function () {
    console.log('refresh called');
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: './',
            middleware: [historyFallback()]
        }
    })
});

gulp.task('dev', ['browserify', 'watch','browserSync']);