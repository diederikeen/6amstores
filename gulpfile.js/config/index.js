var SRC_DIR = './resources';
var BUILD_DIR = './build';

var config = {
  baseDir: {
    dest: BUILD_DIR,
    src: SRC_DIR
  },
  browserSync: {
    src: BUILD_DIR
  },
  fonts: {
    dest: BUILD_DIR + '/assets/fonts/',
    src: SRC_DIR + '/fonts/**/*'
  },
  html: {
    src: './resources/html/**/*',
    dest: BUILD_DIR
  },
	images: {
		src: SRC_DIR + '/img/**/*.{gif,jpg,png,svg}',
		dest: BUILD_DIR + '/assets/img'
	},
  sass: {
    watchSrc: SRC_DIR + '/sass/**/*.scss',
    src: SRC_DIR + '/sass/main-screen.scss',
    dest: BUILD_DIR + '/assets/css',
    settings: {
      outputStyle: 'compressed'
    }
  },
  svg: {
    src: SRC_DIR + '/svg-sprite/**/*.svg',
    dest: BUILD_DIR + '/assets/svg-sprite'
  },
  favicon: {
    src: SRC_DIR + '/favicon/**/*',
    dest: BUILD_DIR + '/assets/favicon/',
  }
};

module.exports = config;
