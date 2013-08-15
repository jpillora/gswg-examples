module.exports = function(grunt) {

  grunt.registerTask("foo", function(arg1, arg2) {
    grunt.log.writeln("arg1 is: " + arg1);
    grunt.log.writeln("arg2 is: " + arg2);
  });

};
