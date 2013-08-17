module.exports = function(grunt) {

  // Load the plugin that provides the "aws" task.
  grunt.loadNpmTasks('grunt-aws');

  // Project configuration.
  grunt.initConfig({
    aws: {
      options: {
        config:{
          accessKeyId: '...',
          secretAccessKey: '...'
        },
        s3: {
          options: {
            bucket: '...',
            access: 'public-read'
          }
        }
      },
      deploy: {
        service: 's3',
        put: ['src/**']
      }
    }
  });

  // Define the default task
  grunt.registerTask('default', ['aws']);
};