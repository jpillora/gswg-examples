module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-mocha");

  //Point the 'mocha' task to our test runner
  grunt.initConfig({
    mocha: {
      test: {
        options: {
          run: true
        },
        src: "test/runner.html"
      }
    }
  });

  grunt.registerTask("default", ["mocha"]);
};
