module.exports = function(grunt) {

  grunt.initConfig({
    build: {
      main: {},
      extra: {}
    },
    test: {
      main: {},
      extra: {}
    }
  });

  grunt.registerMultiTask('build', function() {
    console.log('building target ' + this.target + '...');
  });

  grunt.registerMultiTask('test', function() {
    console.log('testing target ' + this.target + '...');
  });

  grunt.registerTask('default', ['build:main', 'test:main']);
};
