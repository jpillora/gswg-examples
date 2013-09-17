module.exports = function(grunt) {

  // Load the plugins that provide the "concat" and "watch" tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({
    srcFiles: ["src/a.js", "src/b.js", "src/c.js"],
    concat: {
      target1: {
        files: {
          "build/abc.js": "<%= srcFiles %>"
        }
      }
    },
    watch: {
      target1: {
        files: "<%= srcFiles %>",
        tasks: ["concat"]
      }
    }
  });

  // Define the default task
  grunt.registerTask('default', ['concat', 'watch']);
};