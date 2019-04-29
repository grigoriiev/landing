var gulp = require('gulp');
var less = require('gulp-less');
var watch = require("gulp-watch");
var csso = require("gulp-csso");
var concat = require("gulp-concat");
var autoprefixer = require('gulp-autoprefixer');
gulp.task("less", function () {
    function run() {
        return gulp.src("css/*.less") //преобразуем less в css
            .pipe(less())
            .pipe(autoprefixer({ // используем автоперфиксер 
                browsers: ['last 15 versions', '>1%', 'ie 8', 'ie 7'],
                cascade: false
            }))
            .pipe(concat("main.style.css")) // соединяем файлы переменуеи файл

            .pipe(gulp.dest("css")); // кладем в папку css
    }
    watch("css/*.less", run); // следим за папкой css с файлами less
    return run();
});

gulp.task("default", ["less"]);