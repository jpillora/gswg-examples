module.exports = function(grunt) {
  console.log('bar is: ' + grunt.option('bar'));
  console.log('debug is: ' + grunt.option('debug'));
  grunt.registerTask('foo', function() {
    //nothing here...
  });
};