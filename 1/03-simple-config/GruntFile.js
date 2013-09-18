module.exports = function(grunt) {

  grunt.initConfig({
    bar: {
      foo: 42
    }
  });

  grunt.registerTask('bar', function() {
    var bar = grunt.config.get('bar');
    var bazz = bar.foo + 7;
    console.log('Bazz is ' + bazz);
  });

};