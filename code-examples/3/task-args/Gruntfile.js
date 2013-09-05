module.exports = function(grunt) {

  grunt.registerTask('foo', function(arg1, arg2) {
    console.log('arg1 is: ' + arg1);
    console.log('arg2 is: ' + arg2);
  });

};
