module.exports = function(grunt) {
  grunt.initConfig({
    foo: ['a.js','b.js','c.js','d.js'],
    baz: '<%= foo %>'
  });

  grunt.registerTask('default', function() {
    console.log( grunt.config('baz') );
  });
};