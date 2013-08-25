var request = require('request');
var url = 'https://raw.github.com/jpillora/getting-started-with-gruntjs/master/README.md';

module.exports = function(grunt) {

  grunt.registerTask("webget", function() {
    
    var done = this.async();
    
    request(url, function(err, res, contents) {
      if(err) throw err;
      grunt.file.write('README.md', contents);
      done();
    });

  });

};
