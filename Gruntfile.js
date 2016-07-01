
module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
            dist: {
                files: {
                    'css/prod.css': 'css/main.css'
                }
            }
        },
        cssmin: {
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              './css/prod.min.css': ['./css/fonts.css', './css/normalize.css', './css/prod.css']
            }
          }
        },
        watch: {
            styles: {
                files: ['css/main.css'],
                tasks: ['autoprefixer', 'cssmin']
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.task.registerTask('default', ['autoprefixer', 'cssmin'])
};
