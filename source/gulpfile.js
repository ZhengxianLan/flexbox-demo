var gulp = require('gulp');
var sass = require('gulp-sass') ;
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');

gulp.task('sass',function () {
  gulp.src('styles/main.scss')
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(gulp.dest('../styles'));
});

gulp.task('cp',function () {
  gulp.src('./index.html')
    .pipe(gulp.dest('../'));
});

gulp.task('watch',function(){
  gulp.watch([ '*.html' ],['cp']);
  // 必须具体到文件，而不能使用文件夹
  gulp.watch(['styles/*'],['sass']);
});


gulp.task('default',['sass','cp','watch']);
