module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

    watch: {
			js: {
				files: ['src/lazyload.js'],
				tasks:['uglify']
			},
			cssmin: {
				files: ['src/lazyload.css'],
				tasks: ['cssmin']
			}
		},

		uglify: {
			dist: {
				files: {
					'dist/lazyload.min.js' : 'src/lazyload.js'
				},
				options: {
					sourceMap: false
				}
			}
		},

		cssmin: {
		  options: {
				level: { 1: { specialComments: 'none' }}
		  },
		  target: {
		    files: {
					'dist/lazyload.min.css': ['src/lazyload.css']
		    }
		  }
		},

		jshint: {
	    options: {
	      curly: true,
	      eqeqeq: true,
	      eqnull: true,
	      browser: true,
	      globals: {
	        jQuery: true,
					$: true
	      },
	    },
	    src: ['src/lazyload.js']
	  },
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default',[ 'watch' ]);
}
