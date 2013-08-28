module.exports = function(grunt) {

  grunt.registerTask('build', function() {
    grunt.log.writeln('building...');
  });

  grunt.registerTask('test', function() {
    grunt.log.writeln('testing...');
  });

  grunt.registerTask('upload', function() {
    grunt.log.writeln('uploading...');
  });

  grunt.registerTask('deploy', ['build', 'test', 'upload']);
};
