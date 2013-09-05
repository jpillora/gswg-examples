module.exports = function(grunt) {

  grunt.initConfig({
    foo: {
      target1: {},
      target2: {}
    }
  });

  grunt.registerMultiTask('foo', 'My example multitask', function(arg1, arg2) {
    console.log('target is: ' + this.target);
    console.log('arg1 is: ' + arg1);
    console.log('arg2 is: ' + arg2);
  });

};