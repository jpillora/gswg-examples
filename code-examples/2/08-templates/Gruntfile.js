module.exports = function(grunt) {
  grunt.initConfig({
    foo: 'c',
    bar: 'b<%= foo %>d',
    baz: 'a<%= bar %>e'
  });

  grunt.registerTask('default', function() {
    grunt.log.writeln( grunt.config('baz') );
  });
};