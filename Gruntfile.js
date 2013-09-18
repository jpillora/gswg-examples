#!/usr/bin/env node

module.exports = function (grunt) {

  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    "jshint": {
      "options": {
        "browser": true,
        "curly": true,
        "eqeqeq": true,
        "node": true,
        "globals": {
          "grunt": true
        }
      },
      "target1": [
        'Gruntfile.js',
        '**/*.{js,json}',
        // Excludes
        "!**/node_modules/**",
        "!**/*.min.js",
        "!**/1/04-linting/**"
      ]
    }
  });

  grunt.registerTask("default", ["jshint"]);
};
