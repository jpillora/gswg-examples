module.exports = function(grunt) {

  grunt.registerTask("foo", function() {
    grunt.log.write("test");
  });

  grunt.initConfig({
    foo: 42
  });

  grunt.registerTask("default", ["foo"]);
};