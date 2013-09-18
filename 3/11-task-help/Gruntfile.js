module.exports = function(grunt) {

  grunt.registerTask('analyze',
    'Analyzes the source',
    function() {
      console.log('analyzing...');
    }
  );

  grunt.registerMultiTask('compile',
    'Compiles the source',
    function() {
      console.log('compiling...');
    }
  );

  grunt.registerTask('all',
    'Analyzes and compiles the source',
    ['analyze','compile']
  );

};
