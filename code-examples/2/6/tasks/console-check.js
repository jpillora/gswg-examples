module.exports = function(grunt) {

  grunt.registerTask('consoleCheck', function() {
    var contents = grunt.file.read('./build/app.js');
    if(contents.indexOf('console.log') >= 0)
      grunt.fail.warn('console.log() statement found in app.js');
  });

};