module.exports = function(grunt) {

  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        browser: true
      },
      src: ['Gruntfile.js', 'src/**/*.js']
    }
  });

  // Define the default task
  grunt.registerTask('default', ['jshint']);

};