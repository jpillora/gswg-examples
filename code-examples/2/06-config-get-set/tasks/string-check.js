module.exports = function(grunt) {

  grunt.registerTask('stringCheck', function() {
    var file = grunt.config('stringCheck.file');
    var contents = grunt.file.read(file);
    var string = grunt.config('stringCheck.string');
    if(contents.indexOf(string >= 0))
      grunt.fail.warn('"' + string + '" found in "' + file + '"');
  });

};


