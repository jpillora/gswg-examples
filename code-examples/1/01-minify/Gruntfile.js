module.exports = function(grunt) {

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Project configuration.
  grunt.initConfig({
    uglify: {
      target1: {
        src: 'foo.js',
        dest: 'foo.min.js'
      }
    }
  });

  // Define the default task
  grunt.registerTask('default', ['uglify']);
};
