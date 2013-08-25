module.exports = function(grunt) {

  grunt.registerTask("foo", function() {
    console.log(0);
    grunt.task.run("bar");
    grunt.task.run("bazz");
    grunt.task.run("bang");
  });

  grunt.registerTask("bar", function() {
    console.log(1);
  });

  grunt.registerTask("bazz", function() {
    console.log(2);
    grunt.task.run(["ping", "pong"]);
  });

  grunt.registerTask("ping", function() {
    console.log(3);
  });

  grunt.registerTask("pong", function() {
    console.log(4);
  });

  grunt.registerTask("bang", function() {
    console.log(5);
  });


  // Define the default task
  grunt.registerTask('default', ['foo']);
};