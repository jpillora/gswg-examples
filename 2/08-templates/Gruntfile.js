module.exports = function(grunt) {
  grunt.initConfig({
    foo: 'c',
    bar: 'b<%= foo %>d',
    baz: 'a<%= bar %>e'
  });

  grunt.registerTask('default', function() {
    console.log( grunt.config('baz') );
  });
};