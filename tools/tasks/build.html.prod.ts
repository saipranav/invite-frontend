import {join} from 'path';
import {
APP_SRC,
TMP_DIR
} from '../config';

export = function buildHTMLProd(gulp, plugins) {
  return function() {

    return gulp.src(join(APP_SRC, '**', '*.html'))
      .pipe(gulp.dest(TMP_DIR));
  };

};
