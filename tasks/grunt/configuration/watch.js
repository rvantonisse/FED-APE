/**
 * Grunt configuration for watch task
 */
function getConfiguration(grunt) {
	'use strict';

	var tasks = '';
	switch (grunt.cli.tasks[0]) {

		case 'develop':
			tasks = {
				options: {
					livereload: true
				},
				index: {
					files: [
						'source/modules/index.json',
						'source/modules/views/_app-index/**',
						'source/content/index.json'
					],
					tasks: [
						'compile-index:development'
					]
				},
				html: {
					files: [
						'source/modules/**/*.html',
						'source/content/**/*.html'
					],
					tasks: [
						'compile-html:development',
						'copy:development'
					]
				},
				css: {
					files: 'source/**/*.scss',
					tasks: ['sass:development']
				},
				images: {
					files: [
						'source/**/*.png',
						'source/**/*.jpg',
						'source/**/*.gif'
						],
					tasks: [
						'newer:imagemin'
					]
				},
				js: {
					files: [
						'source/assets/scripts.json',
						'source/assets/scripts/**/*.js',
						'source/assets/vendor/**/*.js',
						'source/modules/**/*.js',
						'source/content/**/*.js'
					],
					tasks: [
						'concat:development'
					]
				},
				json: {
					files: [
						'source/content/**/_meta.json'
					],
					tasks: [
						'compile-index:development',
						'compile-html:development',
						'copy:development'
					]
				}
			};

			break;

		case 'create-guide':
			tasks = {
				options: {
					livereload: true
				},
				index: {
					files: [
						'source/modules/index.json',
						'source/modules/views/_app-index/**',
						'source/modules/views/_guide/**',
						'source/modules/views/_style-guide/**'
					],
					tasks: [
						'compile-index:guide'
					]
				},
				html: {
					files: [
						'source/modules/**/*.html',
					],
					tasks: [
						'compile-html:guide',
						'copy:guide'
					]
				},
				css: {
					files: 'source/**/*.scss',
					tasks: ['sass:guide']
				},
				js: {
					files: [
						'source/assets/scripts.json',
						'source/assets/scripts/**/*.js',
						'source/assets/vendor/**/*.js',
						'source/modules/**/*.js',
						'source/content/**/*.js'
					],
					tasks: [
						'concat:guide'
					]
				}
			};
			break;
	}
	return tasks;

}

module.exports = getConfiguration;