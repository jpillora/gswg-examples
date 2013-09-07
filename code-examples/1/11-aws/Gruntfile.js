module.exports = function(grunt) {

  // Load the plugin that provides the "s3" task.
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
      //upload all files within build/ to output/
      build: {
        cwd: "build/",
        src: "**",
      }
    }
  });

  // Define the default task
  grunt.registerTask('default', ['s3']);
};