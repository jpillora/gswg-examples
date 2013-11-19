module.exports = function(grunt) {

  grunt.registerTask("gswg", function() {
    var name = grunt.config("gswg.name") || "Jaime";
    grunt.log.ok("Hello, " + name + " you have successfully run the 'gswg' task.");
  });

};
