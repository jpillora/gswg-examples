module.exports = function(grunt) {

  // Load the plugin that provides the "ftp-deploy" task.
  grunt.loadNpmTasks('grunt-ftp-deploy');

  // Project configuration.
  grunt.initConfig({
    'ftp-deploy': {
      target1: {
        auth: {
          host: 'localhost',
          port: 21,
          authKey: 'key1'
        },
        src: 'src',
        dest: '/src'
      }
    }
  });

  // Define the default task
  grunt.registerTask('default', ['ftp-deploy']);
};