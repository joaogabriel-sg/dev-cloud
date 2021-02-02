const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

function compileSass() {
  return gulp
    .src('./public/css/scss/style.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream());
}

function runBuild() {
  return gulp
    .src('./public/js/**/*.js')
    .pipe(babel({
      presets: ['@babel/preset-env'],
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
  gulp.watch('./public/css/scss/**/*.scss', compileSass);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./public/js/**/*.js', runBuild);
}

gulp.task('default', watch);
