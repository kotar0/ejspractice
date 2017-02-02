var gulp = require('gulp');
var ejs = require('gulp-ejs');
var watch = require('gulp-watch');
var fs = require('fs')
var csv2json = require('gulp-csv2json');
var rename = require('gulp-rename');

gulp.task('ejs', function () {
    var json = JSON.parse(fs.readFileSync('./ejs/data.json'));
    gulp.src('ejs/**/*.ejs')
        .pipe(ejs(json, {'ext': '.html'}))
        .pipe(gulp.dest('./'));
});

gulp.task('csv2json', function () {
    var csvParseOptions = {}
    gulp.src('ejs/**/*.csv')
        .pipe(csv2json(csvParseOptions))
        .pipe(rename('data.json'))
        .pipe(gulp.dest('./ejs/'));
})

gulp.task('watch', function () {
    gulp.watch('./**/*.ejs', ['ejs'])
})

gulp.task('default', ['watch'], function () {

})