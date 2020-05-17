const gulp = require('gulp');

const ts = require('gulp-typescript');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var gutil = require('gulp-util');
var tsify = require('tsify');

// const { parse, stringify, assign } = require('comment-json');
// const fs = require('fs');
// var tsconfig = parse(fs.readFileSync('./tsconfig.json').toString());
// console.log(tsconfig);

var clean = require('gulp-clean');

var paths = {
  pages: ['src/*.html', 'src/*.css', 'src/*.csv'],
};

function remove() {
  return gulp.src('dist', { read: false }).pipe(clean());
}

function copy() {
  return gulp.src(paths.pages).pipe(gulp.dest('dist'));
}

function lib() {
  return browserify()
    .require('d3')
    .bundle()
    .pipe(source('vendor.js'))
    .pipe(gulp.dest('dist'));
}

var watchedBrowserify = watchify(
  browserify({
    basedir: '.',
    debug: true,
    entries: ['src/index.ts'],
    cache: {},
    packageCache: {},
    bundleExternal: false,
  }).plugin(tsify),
);

function pack() {
  return watchedBrowserify
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
}

watchedBrowserify.on('update', pack);
watchedBrowserify.on('log', gutil.log);

exports.default = gulp.series(remove, copy, lib, pack);
