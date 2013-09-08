module.exports = function(grunt) {

  // Load the plugin that provides the "sshexec" task and the "sftp" task.
  grunt.loadNpmTasks('grunt-ssh');

  // Project configuration.
  grunt.initConfig({
    sftp: {
      options: {
        host: '172.16.59.129',
        username: 'jamo',
        path: '/tmp/',
        srcBasePath: 'build/'
      },
      target1: {
        src: 'build/*.html'
      }
    }
  });

  // Define the default task
  grunt.registerTask('default', ['sftp']);
};