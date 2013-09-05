module.exports = function(grunt) {
  console.log('bar is: ' + grunt.option('bar'));
  grunt.registerTask('foo', function() {
    //nothing here...
  });
};