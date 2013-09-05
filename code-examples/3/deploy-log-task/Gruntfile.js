var fs = require('fs');

module.exports = function(grunt) {

  grunt.registerTask('log-deploy', function() {
    var message = 'Deployment on ' + new Date();
    fs.appendFileSync('deploy.log', message + '\n');
    console.log('Appended "' + message + '"');
  });

};
