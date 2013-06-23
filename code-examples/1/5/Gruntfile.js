module.exports = function(grunt) {

  // Load the plugin that provides the "coffee" task.
  grunt.loadNpmTasks('grunt-contrib-coffee');

  // Project configuration.
  grunt.initConfig({
    coffee: {
      src: {
        expand: true,
        flatten: true,
        cwd: 'src/',
        src: ['*.coffee'],
        dest: 'build/',
        ext: '.js'
      }
    }
  });

  // Define the default task
  grunt.registerTask('default', ['coffee']);
};