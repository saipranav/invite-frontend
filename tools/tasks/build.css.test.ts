import {join} from 'path';
import {APP_SRC, TEST_DEST} from '../config';

export = function buildTest(gulp, plugins) {
  return function() {
    let src = [
      join(APP_SRC, '**', '*.scss')
    ];

    let result = gulp.src(src)
    .pipe(plugins.plumber())
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.autoprefixer({ browsers: ['last 2 version'] }));

    return result
      .pipe(gulp.dest(TEST_DEST));
  };
};
