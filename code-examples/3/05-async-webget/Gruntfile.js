var request = require('request');
var url = 'https://raw.github.com/jpillora/'+
          'getting-started-with-grun2tjs/master/README.md';

module.exports = function(grunt) {
  grunt.registerTask('webget', function() {
    var done = this.async();
    request(url, function(err, res, contents) {
      if(err) {
        done(err);
      } else if(res.status !== 200) {
        done(new Error('Not OK'));
      } else {
        grunt.file.write('FILE.md', contents);
        done();
      }
    });
  });
};
