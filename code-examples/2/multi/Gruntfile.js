module.exports = function(grunt) {

  // Load all tasks in the tasks directory.
  grunt.loadTasks('./tasks');

  // Project configuration.
  grunt.initConfig({
    myMultiTask: {
      target1: {
        files: {
          'dest/a.js': 'tasks/*.js',
          'dest/a1.js': ['src/aa1.js', 'src/aaa1.js']
        }
      }
    }
  });

  // Define the default task
  grunt.registerTask('default', ['myMultiTask']);
};