module.exports = function(grunt) {

  grunt.initConfig({
    bar: {
      foo: 42
    }
  });

  grunt.registerTask('bar', 'A bar task.', function() {
    var bar = grunt.config.get('bar');
    var bazz = bar.foo + 7;
    grunt.log.writeln('Bazz is ' + bazz);
  });

};