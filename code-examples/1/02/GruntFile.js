module.exports = function(grunt) {

  grunt.registerTask('foo', 'A foo task.', function() {
    grunt.log.writeln(this.name + " is running...");
  });

};