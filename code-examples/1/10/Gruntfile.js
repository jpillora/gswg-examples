module.exports = function(grunt) {

  // Load the plugin that provides the "sshexec" task and the "sftp" task.
  grunt.loadNpmTasks('grunt-ssh');

  // Project configuration.
  grunt.initConfig({
    sftp: {
      target1: {
        files: {
          "src/": "src/**"
        },
        options: {
          path: '~/',
          host: 'localhost',
          username: '...',
          password: '...'
        }
      }
    }
  });

  // Define the default task
  grunt.registerTask('default', ['sftp']);
};