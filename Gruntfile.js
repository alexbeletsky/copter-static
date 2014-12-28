module.exports = function (grunt) {
	require('time-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			dev: {
				options: {
					sassDir: 'source/sass',
					cssDir: 'source/css',
				}
			}
		},
		cssmin: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> (<%= pkg.homepage %>) */'
			},
			minify:{
				files: {
					'public/css/main.css': ['source/css/main.css']
				}
			}
		},
		watch: {
			sass: {
				files: 'source/sass/*.scss',
				tasks: ['compass'],
				options: {
					livereload: true
				}
			},
			html: {
				files: ['source/**/*.html', 'source/**/*.css'],
				options: {
					livereload: true
				}
			}
		},
		connect: {
			dev: {
				options: {
					base: 'source',
					hostname: 'localhost',
					port: 7000,
					open: true
				}
			},
			dist: {
				options: {
					base: 'public',
					hostname: 'localhost',
					port: 7001,
					open: true
				}
			}
		},
		copy: {
			images: {
				cwd: 'source/images',
				src: '**/*',
				dest: 'public/images',
				expand: true
			},
			bootstrap: {
				cwd: 'source/css/bootstrap',
				src: '**/*',
				dest: 'public/css/bootstrap',
				expand: true
			},
			fontello: {
				cwd: 'source/css/fontello',
				src: '**/*',
				dest: 'public/css/fontello',
				expand: true
			},
			fonts: {
				cwd: 'source/fonts',
				src: '**/*',
				dest: 'public/fonts',
				expand: true
			},
			views: {
				cwd: 'source/views',
				src: '**/*',
				dest: 'public/views',
				expand: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('dev', ['compass']);
	grunt.registerTask('start:dev', ['dev', 'connect:dev', 'watch']);

	grunt.registerTask('dist', ['compass', 'cssmin', 'copy']);
	grunt.registerTask('start:dist', ['dist', 'connect:dist', 'watch']);

	grunt.registerTask('default', 'dev');
};
