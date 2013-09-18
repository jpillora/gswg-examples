module.exports = function(grunt) {
  // Register a multi-task (runs once per target)
  grunt.registerMultiTask('showTargetFiles', function() {
    // Show the 'files' array
    this.files.forEach(function(file) {
      console.log("source: " + JSON.stringify(file.src)+ " -> " +
             "destination: " + JSON.stringify(file.dest));
    });
  });

};