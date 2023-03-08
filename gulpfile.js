"use strickt";
const {src, dest} = require("gulp");
const gulp = require("gulp");
const postcss = require('gulp-postcss');
const sass = require('gulp-sass')(require('sass'));
const tailwindcss = require("tailwindcss");

var path = {
    build: {
        html: "dist/",
        css: "dist/assets/css"
    },
    src: {
        html: "src/*.html",
        css: "src/assets/sass/style.scss"
    },
    watch: {
        html: "src/*.html",
        css: "src/assets/sass/style.scss"
    }
}

function html() {
    return src(path.src.html, {base: "src/" })
    .pipe(dest(path.build.html));
    }
    
// без tailwind
    // function css() {
    //     return src(path.src.css, {base: "src/assets/sass/" })
    //     .pipe(sass())
    //     .pipe(dest(path.build.css));
    // }

// whith tailwind
function css() {
    return src(path.src.css, {base: "src/assets/sass/" })
    .pipe(postcss([
        tailwindcss('./tailwind.config.js'),
    ]))
    .pipe(sass())
    .pipe(dest(path.build.css));
}

    exports.html = html;
    exports.css = css;