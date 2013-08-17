module.exports = function(grunt) {

  // Load the plugin that provides the "stylus" task.
  grunt.loadNpmTasks('grunt-contrib-stylus');

  // Project configuration.
  grunt.initConfig({
    stylus: {
      target1: {
        files: {
          "build/foo.css": "src/foo.styl"
        }
      }
    }
  });

  // Define the default task
  grunt.registerTask('default', ['stylus']);
};