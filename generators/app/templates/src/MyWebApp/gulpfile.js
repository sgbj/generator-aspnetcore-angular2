/// <binding AfterBuild='app' Clean='clean' ProjectOpened='default' />
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    del = require('del'),
    runSequence = require('run-sequence');

var paths = {
    webroot: './wwwroot/',
    npm: './node_modules/'
};
paths.vendors = [
    'systemjs/dist/**/*',
    'angular2/bundles/**/*',
    'es6-shim/**/*',
    'rxjs/bundles/**/*',
    'material-design-lite/dist/**/*'
];
paths.vendorDest = paths.webroot + 'vendor/';
paths.app = './app/**/*';
paths.appDest = paths.webroot + 'app/';

gulp.task('clean', function () {
    return del([paths.vendorDest, paths.appDest]);
});

gulp.task('vendor', function () {
    return gulp.src(paths.vendors.map(function (path) {
        return paths.npm + path;
    }), {base: paths.npm}).pipe(gulp.dest(paths.vendorDest));
});

gulp.task('app', function () {
    return gulp.src([paths.app, '!' + paths.app + '.ts'])
        .pipe(gulp.dest(paths.appDest));
});

gulp.task('watch', function () {
    return gulp.src([paths.app, '!' + paths.app + '.ts'])
        .pipe(watch([paths.app, '!' + paths.app + '.ts']))
        .pipe(gulp.dest(paths.appDest));
});

gulp.task('default', function (cb) {
    runSequence('clean', ['vendor', 'app', 'watch'], cb);
});