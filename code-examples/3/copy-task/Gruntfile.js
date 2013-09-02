module.exports = function(grunt) {

  grunt.initConfig({
    copy: {
      files: {
        src: "*.{js,json}"
      }
      
    }
  });

  grunt.registerMultiTask('copy', function() {
    
    console.log(this)

    this.files.forEach(function(file) {
      console.log(file);
    });
    
  });

};
