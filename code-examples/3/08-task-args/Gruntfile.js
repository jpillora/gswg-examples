module.exports = function(grunt) {

  grunt.registerTask('foo', function(p1, p2) {
    console.log('first parameter is: ' + p1);
    console.log('second parameter is: ' + p2);
  });

};
