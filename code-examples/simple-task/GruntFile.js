module.exports = function(grunt) {

  grunt.registerTask('foo', 'A foo task.', function(bar) {
    grunt.log.writeln(this.name + " has a " + bar);
  });

};