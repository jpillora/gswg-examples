module.exports = function(grunt) {

  // The following two are functionally equivalent:
  
  // load tasks by module name
  grunt.loadNpmTasks("grunt-contrib-copy");
  // load tasks by directory
  // grunt.loadTasks("./node_modules/grunt-contrib-copy/tasks");
  
  grunt.initConfig({ copy: { empty: {} } });

  grunt.registerTask("default", ["copy"]);
};
