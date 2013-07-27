var util = require('util');

module.exports = function(grunt) {

  grunt.registerTask('myTask', function() {

    console.log(util.inspect(this, {depth: 2, colors: true}));

    console.log(this.options());

  });

};