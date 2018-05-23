const gulp = require("gulp"),
      plumber = require("gulp-plumber");

gulp.task("style", function(){
  return gulp.src("public/scss/main.scss")
});
