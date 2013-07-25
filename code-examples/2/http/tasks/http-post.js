var request = require('request');

module.exports = function(grunt) {

  grunt.registerTask('httpPost', function() {

    var done = this.async();
    grunt.log.writeln(grunt.config('httpPost.url'));

    request.post(grunt.config('httpPost.url'), function(err, response, body) {
      grunt.log.writeln(body);
      done();
    });

  });

};