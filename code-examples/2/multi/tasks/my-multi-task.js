var util = require('util');

module.exports = function(grunt) {

  grunt.registerMultiTask('myMultiTask', function() {

    console.log(util.inspect(this, {depth: 2, colors: true}));

    console.log(this.options())
  });

};