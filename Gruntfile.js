var fs = require('fs'), path = require('path');

// this Gruntfile performs static analysis
// on all of the examples to help catch
// bugs and normalize style  
module.exports = function (grunt) {

  require("load-grunt-tasks")(grunt);

  //normalize each example's package.json
  grunt.registerTask('check-packages', function() {

    //chapters
    var chs = fs.readdirSync(__dirname);
    chs.forEach(function(ch) {

      if(!/^\d$/.test(ch)) return;

      //examples
      var egs = fs.readdirSync(ch);
      egs.forEach(function(eg) {

        var pkgPath = path.join(ch, eg, 'package.json');

        if(!fs.existsSync(pkgPath))
          return console.log('WARNING: ' + pkgPath + ' is missing');

        var pkg = JSON.parse( fs.readFileSync(pkgPath).toString() );

        var newpkg = {
          name: null,
          version: "0.1.0",
          repository: "https://github.com/jpillora/gswg-examples.git",
          author: "Jaime Pillora <dev@jpillora.com>"
        };

        for(var key in pkg)
          newpkg[key] = pkg[key];

        newpkg.name = "gswg-"+ch+"-"+eg;
        delete newpkg.scripts;
        delete newpkg.description;
        delete newpkg.license;
        delete newpkg.main;

        if(newpkg.dependencies)
          console.log('WARNING: ' + pkgPath + ' has "dependencies"');

        fs.writeFileSync(pkgPath, JSON.stringify(newpkg, null, 2));
      });
    });
  });

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
