module.exports =function(grunt) {

  grunt.loadTasks("./tasks");

  grunt.initConfig({
    foo: {
      bar: 42
    }
  });

  grunt.registerTask("default", ["foo"]);
};
