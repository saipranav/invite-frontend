import {join} from 'path';
import {APP_SRC, APP_DEST} from '../config';

export = function buildCSSDev(gulp, plugins) {

  return function() {
    let src = [
      join(APP_SRC, '**', '*.scss'),
      '!' + join(APP_SRC, 'assets', '**', '*.css')
    ];

    let result = gulp.src(src)
      .pipe(plugins.plumber())
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass().on('error', plugins.sass.logError))
      .pipe(plugins.autoprefixer({ browsers: ['last 2 version'] }));

    return result
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest(APP_DEST));
  };
};
