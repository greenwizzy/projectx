const {src, dest} = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();


var path = {
    build: {
        css: 'dist/css'
    },
    src: {
        sass: 'src/sass/*.sass'
    },
    html: '*.html'
    
}

function reload(done){
    browserSync.reload();
    done();
}



function style() {
    return src(path.src.sass)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write())
        .pipe(dest(path.build.css))
        .pipe(browserSync.stream())
}


function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    style();
    gulp.watch(path.src.sass, style);
    gulp.watch(path.html, reload)

}


exports.watch = watch;
exports.style = style;