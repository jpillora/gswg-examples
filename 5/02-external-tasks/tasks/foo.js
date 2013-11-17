module.exports =function(grunt) {

  grunt.registerTask("foo", function() {
    console.log("foo says bar is: " + grunt.config("foo.bar"));
  });
  
};