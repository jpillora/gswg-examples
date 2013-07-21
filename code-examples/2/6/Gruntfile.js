module.exports = function(grunt) {

  grunt.config('foo', 42);

  grunt.log.write( grunt.config('foo') );

  grunt.config.init({'bar': 7});

  grunt.log.write( grunt.config('foo') );

};