module.exports = function(grunt) {

  // Load all tasks in the tasks directory.
  grunt.loadTasks('./tasks');

  // Project configuration.
  grunt.initConfig({
   httpPost: {
      url: 'http://echo.jpillora.com/clear-cache'
    }
  });

  // Define the default task
  grunt.registerTask('default', ['httpPost']);
};