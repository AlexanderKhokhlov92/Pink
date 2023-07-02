const { src, dest, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const avif = require('gulp-avif');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');
const svgSprite = require('gulp-svg-sprite');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const sourcemaps = require('gulp-sourcemaps');

function fonts() {
  return src('source/fonts/src/*.*')
    .pipe(
      fonter({
        formats: ['woff', 'ttf'],
      })
    )
    .pipe(src('source/fonts/*.ttf'))
    .pipe(ttf2woff2())
    .pipe(dest('source/fonts'));
}

function images() {
  return src(['source/img/src/*.*', '!source/img/src/*.svg'])
    .pipe(newer('source/img'))
    .pipe(avif({ quality: 50 }))
    .pipe(src('source/img/src/*.*'))
    .pipe(newer('source/img'))
    .pipe(webp())
    .pipe(src('source/img/src/*.*'))
    .pipe(newer('source/img'))
    .pipe(imagemin())
    .pipe(dest('source/img'));
}

function sprite() {
  return src('sourse/img/*.svg')
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: '../sprite.svg',
            example: true,
          },
        },
      })
    )
    .pipe(dest('source/img'));
}

function scripts() {
  return src(['source/js/**/*.js', '!source/js/**/*.min.js'])
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('source/js'))
    .pipe(browserSync.stream());
}

function styles() {
  return src('source/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({ overrideBrowsersList: ['last 10 version'] }))
    .pipe(concat('style.min.css'))
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(replace('../../', '../'))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('source/css'))
    .pipe(browserSync.stream());
}

function watching() {
  browserSync.init({
    server: {
      baseDir: 'source/',
    },
  });
  watch(['source/scss/**/*.scss'], styles);
  watch(['source/img/src'], images);
  watch(['source/js/**/*.js', '!source/js/**/*.min.js']).on('change', scripts);
  watch(['source/*.html']).on('change', browserSync.reload);
}

function cleanBuild() {
  return src('build').pipe(clean());
}

function building() {
  return src(
    [
      'source/css/style.min.css',
      'source/img/*.*',
      'source/img/*.svg',
      //   'source/img/dist/sprite.svg',
      'source/fonts/*.*',
      'source/js/*.min.js',
      'source/**/*.html',
    ],
    { base: 'source' }
  ).pipe(dest('build'));
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.images = images;
exports.sprite = sprite;
exports.fonts = fonts;
exports.cleanBuild = cleanBuild;

exports.build = series(cleanBuild, building);
exports.default = parallel(styles, scripts, watching);
