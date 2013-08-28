module.exports = function(grunt) {

  grunt.registerTask('stringCheck', function() {

    //fail if configuration is not provided
    grunt.config.requires('stringCheck.file');
    grunt.config.requires('stringCheck.string');

    //retrieve filename and load it
    var file = grunt.config('stringCheck.file');
    var contents = grunt.file.read(file);
    //retrieve string to search for
    var string = grunt.config('stringCheck.string');

    if(contents.indexOf(string >= 0))
      grunt.fail.warn('"' + string + '" found in "' + file + '"');
  });

};


