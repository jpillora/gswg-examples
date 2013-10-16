module.exports = function(grunt) {

  // Initialize environment
  var env = grunt.option('env') || 'dev';

  // Load tasks provided by each plugin
  grunt.loadNpmTasks("grunt-contrib-coffee");
  grunt.loadNpmTasks("grunt-contrib-stylus");
  grunt.loadNpmTasks("grunt-contrib-jade");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");

  // Project configuration
  grunt.initConfig({
    // Compilation
    coffee: {
      build: {
        options: {
          join: true
        },
        src: [
          "src/scripts/**/*.coffee",
          "!src/scripts/app.coffee",
          "src/scripts/app.coffee"
        ],
        dest: "build/js/app.js"
      }
    },
    stylus: {
      build: {
        options: {
          compress: false
        },
        src: "src/styles/app.styl",
        dest: "build/css/app.css"
      }
    },
    jade: {
      build: {
        options: {
          pretty: true
        },
        src: "src/views/app.jade",
        dest: "build/app.html"
      }
    },
    // Optimization
    uglify: {
      compress: {
        src: "<%= coffee.build.dest %>",
        dest: "<%= coffee.build.dest %>"
      }
    },
    cssmin: {
      compress: {
        src: "<%= stylus.build.dest %>",
        dest: "<%= stylus.build.dest %>"
      }
    },
    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeRedundantAttributes: true,
        removeOptionalTags: true
      },
      compress: {
        src: "<%= jade.build.dest %>",
        dest: "<%= jade.build.dest %>"
      }
    }
  });

  // Environment specifc tasks
  if(env === 'prod') {
    grunt.registerTask('scripts', ['coffee', 'uglify']);
    grunt.registerTask('styles',  ['stylus', 'cssmin']);
    grunt.registerTask('views',   ['jade',   'htmlmin']);
  } else {
    grunt.registerTask('scripts', ['coffee']);
    grunt.registerTask('styles',  ['stylus']);
    grunt.registerTask('views',   ['jade']);
  }

  // Define the default task
  grunt.registerTask('default', ['scripts','styles','views']);
};
