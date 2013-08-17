module.exports = function(grunt) {

  grunt.registerTask('consoleCheck', function() {
    var contents = grunt.file.read('./src/app.js');
    if(contents.indexOf('console.log(') >= 0)
      grunt.fail.warn('"console.log(" found in "app.js"');
  });

};