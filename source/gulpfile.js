var gulp = require('gulp');
var sass = require('gulp-sass') ;
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var wrap = require('gulp-wrap');


// 处理异常，防止在编译sass出错后，gulp直接退出
function handle_error(err) {
  console.error(err.toString());
  this.emit('end');
}

gulp.task('build',function () {
  gulp.src('pages/*.html')
    .pipe(wrap({src:'layout/default.html'}))
    .pipe(gulp.dest('..'));
});

gulp.task('sass',function () {
  gulp.src('styles/main.scss')
  .pipe(sass()).on('error',handle_error)
  .pipe(autoprefixer())
  .pipe(gulp.dest('../styles'));
});


gulp.task('watch',function(){
  // gulp.watch([ '**/*.html' ],['build']); // 使用 **/* 会heapout，这个版本的问题π
  gulp.watch(['pages/*.html','layout/*.html'], ['build']);
  // 必须具体到文件，而不能使用文件夹
  gulp.watch(['styles/*'],['sass']);
  console.log('watching')
});


gulp.task('default',['sass','build','watch']);
