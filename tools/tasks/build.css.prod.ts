import * as merge from 'merge-stream';
import {join} from 'path';
import {
APP_SRC,
TMP_DIR,
PROD_DEPENDENCIES,
CSS_PROD_BUNDLE,
CSS_DEST
} from '../config';

export = function buildCSSProd(gulp, plugins) {
  return function() {

    return merge(buildComponentCss(), processExternalCss());

    function buildComponentCss() {
    return gulp.src([
      join(APP_SRC, '**', '*.scss'),
      '!' + join(APP_SRC, 'assets', '**', '*.css')
    ])
      .pipe(plugins.sass({ errLogToConsole: false }))
      .pipe(plugins.autoprefixer({ browsers: ['last 2 version'] }))
      .pipe(plugins.cssnano())
      .pipe(gulp.dest(TMP_DIR));
    }

    function processExternalCss() {
      return gulp.src(getExternalCss().map(r => r.src))
        .pipe(plugins.cssnano())
        .pipe(plugins.concat(CSS_PROD_BUNDLE))
        .pipe(gulp.dest(CSS_DEST));
    }

    function getExternalCss() {
      return PROD_DEPENDENCIES.filter(d => /\.css$/.test(d.src));
    }
  };
};
