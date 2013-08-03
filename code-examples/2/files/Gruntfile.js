module.exports = function(grunt) {

  // Load all tasks in the tasks directory.
  grunt.loadTasks('./tasks');

  // Project configuration.
  grunt.initConfig({
    // This task displays 'files' array of each target
    showTargetFiles: {

      //compact format
      target1: {
        src: 'src/{a,b}.js',
        dest: 'dest/c.js'
      },

      //files array format
      target2: {
        files: [
          {
            src: 'src/{a,b}.js',
            dest: 'dest/c.js'
          },
          {
            src: 'src/{x,y}.js',
            dest: 'dest/z.js'
          }
        ]
      },

      //files object format
      target3: {
        files: {
          'dest/c.js': 'src/{a,b}.js',
          'dest/z.js': 'src/{x,y}.js'
        }
      },

      //desination expanded
      target4: {
        expand: true,
        cwd: 'src/',
        src: '*.js',
        dest: 'dest/'
      }

    }

  });

  // Define the default task
  grunt.registerTask('default', ['showTargetFiles']);
};