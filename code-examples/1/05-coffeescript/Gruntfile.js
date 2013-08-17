module.exports = function(grunt) {

  // Load the plugin that provides the "coffee" task.
  grunt.loadNpmTasks('grunt-contrib-coffee');

  // Project configuration.
  grunt.initConfig({
    coffee: {
      target1: {
        expand: true,
        flatten: true,
        cwd: 'src/',
        src: ['*.coffee'],
        dest: 'build/',
        ext: '.js'
      },
      target2: {
        files: {
          'build/bazz.js': 'src/*.coffee'
        }
      }
    }
  });

  // Define the default task
  grunt.registerTask('default', ['coffee']);
};