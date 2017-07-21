// Gulp.js configuration
"use strict";

const // source and build folders
  dir = {
    src: "src/",
    build: "../themes/reacttheme/"
  },
  // Gulp and plugins
  gulp = require("gulp"),
  gutil = require("gulp-util"),
  newer = require("gulp-newer"),
  imagemin = require("gulp-imagemin"),
  sass = require("gulp-sass"),
  postcss = require("gulp-postcss"),
  deporder = require("gulp-deporder"),
  concat = require("gulp-concat"),
  stripdebug = require("gulp-strip-debug"),
  webpack_stream = require("webpack-stream"),
  webpack_config = require("./webpack.config.js"),
  webpack2 = require('webpack'),
  uglify = require("gulp-uglify");
// Browser-sync
var browsersync = false;

// PHP settings
const php = {
  src: dir.src + "template/**/*.php",
  build: dir.build
};

// copy PHP files
gulp.task("php", () => {
  return gulp.src(php.src).pipe(newer(php.build)).pipe(gulp.dest(php.build));
});

// image settings
const images = {
  src: dir.src + "images/**/*",
  build: dir.build + "images/"
};

// image processing
gulp.task("images", () => {
  return gulp
    .src(images.src)
    .pipe(newer(images.build))
    .pipe(imagemin())
    .pipe(gulp.dest(images.build));
});

// CSS settings
var css = {
  src: dir.src + "scss/style.scss",
  watch: dir.src + "scss/**/*",
  build: dir.build,
  sassOpts: {
    outputStyle: "nested",
    imagePath: images.build,
    precision: 3,
    errLogToConsole: true
  },
  processors: [
    require("postcss-assets")({
      loadPaths: ["images/"],
      basePath: dir.build,
      baseUrl: "/wp-content/themes/wptheme/"
    }),
    require("autoprefixer")({
      browsers: ["last 2 versions", "> 2%"]
    }),
    require("css-mqpacker"),
    require("cssnano")
  ]
};

// CSS processing
gulp.task("css", ["images"], () => {
  return gulp
    .src(css.src)
    .pipe(sass(css.sassOpts))
    .pipe(postcss(css.processors))
    .pipe(gulp.dest(css.build))
    .pipe(browsersync ? browsersync.reload({ stream: true }) : gutil.noop());
});

// JavaScript settings
const js = {
  src: dir.src + "js/**/*",
  build: dir.build + "js/",
  filename: "app.js"
};

// JavaScript processing
gulp.task("js", () => {
  return ( 
    gulp
      .src(js.src)
      .pipe(webpack_stream(webpack_config, webpack2))
      // .pipe(deporder())
      // .pipe(concat(js.filename))
      // .pipe(stripdebug())
      // .pipe(uglify())
      .pipe(gulp.dest(js.build))
      .pipe(browsersync ? browsersync.reload({ stream: true }) : gutil.noop())
  );
});

// gulp.task("webpack", () => {
//   return webpack_stream(webpack_config).pipe(gulp.dest(js.build));
// });

// run all tasks
gulp.task("build", ["php", "css", "js"]);

// Browsersync options
const syncOpts = {
  proxy: "http://localhost:8888/wordpress/",
  files: dir.build + "**/*",
  open: false,
  notify: false,
  ghostMode: false,
  port: 3001,
  ui: {
    port: 8001
  }
};

// browser-sync
gulp.task("browsersync", () => {
  if (browsersync === false) {
    browsersync = require("browser-sync").create();
    browsersync.init(syncOpts);
  }
});

// watch for file changes
gulp.task("watch", ["browsersync"], () => {
  // page changes
  gulp.watch(php.src, ["php"], browsersync ? browsersync.reload : {});

  // image changes
  gulp.watch(images.src, ["images"]);

  // CSS changes
  gulp.watch(css.watch, ["css"]);

  // JavaScript main changes
  gulp.watch(js.src, ["js"]);
});

// default task
gulp.task("default", ["build", "watch"]);
