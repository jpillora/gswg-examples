module.exports = function(grunt) {

  grunt.registerTask("check-json", function() {
    
    if(!grunt.file.exists("credentials.json"))
      return grunt.fail.warn('Could not find your "credentials.json" file');

    var creds = grunt.file.readJSON("credentials.json");

    if(!creds.username)
      return grunt.fail.warn('Your "credentials.json" file is missing the username field');

  });

};
