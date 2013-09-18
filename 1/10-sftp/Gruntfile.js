module.exports = function(grunt) {

  // Load the plugin that provides the "sshexec" task and the "sftp" task.
  grunt.loadNpmTasks('grunt-ssh');

  // Project configuration.
  grunt.initConfig({
    
    credentials: grunt.file.readJSON('credentials.json'),

    sftp: {
      options: {
        host: '172.16.59.129',
        username: '<%= credentials.username %>',
        password: '<%= credentials.password %>',
        path: '/tmp/',
        srcBasePath: 'build/'
      },
      target1: {
        src: 'build/{foo,bar,bazz}.html'
      }
    }
  });

  // Define the default task
  grunt.registerTask('default', ['sftp']);
};