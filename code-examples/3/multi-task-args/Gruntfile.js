module.exports = function(grunt) {

  grunt.initConfig({
    foo: {
      target1: {},
      target2: {}
    }
  });

  grunt.registerMultiTask('foo', 'My example multitask', function(arg1, arg2) {
    grunt.log.writeln('target is: ' + this.target);
    grunt.log.writeln('arg1 is: ' + arg1);
    grunt.log.writeln('arg2 is: ' + arg2);
  });

};