module.exports = function(grunt) {

  // Load the plugin that provides the "aws" task.
  grunt.loadNpmTasks('grunt-aws');

  // Project configuration.
  grunt.initConfig({
    aws: grunt.file.readJSON("credentials.json"),
    s3: {
      options: {
        accessKeyId: "<%= aws.accessKeyId %>",
        secretAccessKey: "<%= aws.secretAccessKey %>",
        bucket: "jpillora-usa"
      },
      build: {
        cwd: "build/",
        src: "**"
      }
    }
  });

  // Define the default task
  grunt.registerTask('default', ['aws']);
};