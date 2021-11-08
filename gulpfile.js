var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify"),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    concat = require("gulp-concat"),
    minify = require('gulp-minify');

gulp.task('serve', function()
{
    gulp.watch("./styles/**/*.scss", gulp.series('sass'))
    gulp.watch("./js/**/*.js", gulp.series('js'))
})

gulp.task('sass', function() 
{
    return gulp.src('./styles/styles.scss')
        .pipe(sass())
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css'))
})

gulp.task('js', function () {
     return gulp.src(['./js/*.js'])
         .pipe(concat('main.js'))
         .pipe(minify({
             ext: {
                 min: '.min.js' // Set the file extension for minified files to just .js
             },
             noSource: true // Don’t output a copy of the source file
         }))
        .pipe(gulp.dest('./dist/js'));
})


gulp.task('default', gulp.series('serve'))
