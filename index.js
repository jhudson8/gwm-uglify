var uglify = require('gulp-uglify');

module.exports = function(options) {
  return {
    javascript: {
      complete: function(_options, pipeline) {
        return pipeline.pipe(uglify(options));
      }
    }
  };
};
