var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var browser = require("browser-sync");
var rename = require("gulp-rename");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var sassImport = require('gulp-sass-import')

gulp.task("sass", function() {
    return gulp.src(["src/scss/**/*.scss"])
        .pipe(sassImport({
            filename: '_file',
        }))
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(concat("main.min.css"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist/css/"))
        .pipe(browser.stream());
});

gulp.task("bootstrap", async function() {

    gulp.src("./src/bootstrap/scss/bootstrap.scss").pipe(sourcemaps.init()).pipe(sass.sync({ outputStyle: 'compressed' })).pipe(autoprefixer()).
    pipe(sourcemaps.write()).pipe(rename('bootstrap.min.css')).
    pipe(gulp.dest("dist/css"))
        .pipe(browser.stream());

});



gulp.task("watch", function() {

    gulp.watch(["src/scss/*.scss", ], gulp.parallel('sass'));
    browser.init({
        server: {
            baseDir: "./"
        }
    });
});
gulp.task("default", gulp.series('sass', 'bootstrap', 'watch'));