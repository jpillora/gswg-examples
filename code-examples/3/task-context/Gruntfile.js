module.exports = function(grunt) {

  grunt.initConfig({
    next: { target1:{} }
  });

  grunt.registerTask('default', function() {
    console.log(this);
    grunt.task.run('next');
  });

  grunt.registerMultiTask('next', function() {
    console.log(this);
  });


};
