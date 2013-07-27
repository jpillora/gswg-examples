module.exports = function(grunt) {

  // Load all tasks in the tasks directory.
  grunt.loadTasks('./tasks');

  // Project configuration.
  grunt.initConfig({
    options: {
      pow: '#'
    },
    myMultiTask: {
      options: {
        foo: 42,
        bar: 7,
        ping: {
          pong: 1,
          zap: '!'
        }
      },
      target1: {
        options: {
          foo: 21,
          ping: {
            zap: '!!!!'
          }
        }
      },
      target2: {
        files: [
          {
            src: 'tasks/*.*',
            dest: 'out.txt'
          },
          {
            src: 'node_modules/*',
            dest: 'out2.txt'
          }

        ]
      }
    },
    myTask: {

      options: {
        bar: 2
      },

      foo: 42,
      files: {
        'out.txt': 'node_modules/*'
      }
    }
  });

  // Define the default task
  grunt.registerTask('default', ['myTask']);
};