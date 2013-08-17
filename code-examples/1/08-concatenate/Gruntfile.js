module.exports = function(grunt) {

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Project configuration.
  grunt.initConfig({
    concat: {
      target1: {
        files: {
          "build/abc.js": ["src/a.js", "src/b.js", "src/c.js"]
        }
      }
    }
  });

  // Define the default task
  grunt.registerTask('default', ['concat']);
};