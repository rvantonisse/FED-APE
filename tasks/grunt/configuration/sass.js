/**
 * Sass compiles all scss files in assets/scss to assets/style.
 * Generates sourcemaps and therefore requires 3.3.0 or higher.
 * Partials (starting with underscore) are excluded.
 */
function getConfiguration(grunt) {
	'use strict';
	return {
		// https://github.com/gruntjs/grunt-contrib-sass#options
		development: {
			options: {
				sourcemap: true,
				style: 'expanded'
			},
			files: [
				{
					expand: true,
					cwd: 'source/assets/scss',
					src: ['base.scss', 'main.scss'],
					dest: 'web/assets/style',
					ext: '.css'
				},
				{
					expand: true,
					cwd: 'source/assets/scss',
					src: ['guide.scss', 'debug.scss'],
					dest: 'web/guide',
					ext: '.css'
				}
			]
		},
		developmentServer: {
			options: {
				sourcemap: false,
				style: 'expanded'
			},
			files: [
				{
					expand: true,
					cwd: 'source/assets/scss',
					src: ['base.scss', 'main.scss'],
					dest: 'web/assets/style',
					ext: '.css'
				},
				{
					expand: true,
					cwd: 'source/assets/scss',
					src: ['guide.scss', 'debug.scss'],
					dest: 'web/guide',
					ext: '.css'
				}
			]
		},
		distribution: {
			options: {
				sourcemap: false,
				style: 'expanded'
			},
			files: [
				{
					expand: true,
					cwd: 'source/assets/scss',
					src: ['*.scss', '!_*.scss'],
					dest: 'distribution/assets/style',
					ext: '.css'
				},
				{
					expand: true,
					cwd: 'source/modules',
					src: ['**/*.scss'],
					dest: 'distribution/modules',
					ext: '.css'
				}
			]
		},
		'distribution-guide': {
			options: {
				sourcemap: false,
				style: 'expanded'
			},
			files: [
				{
					expand: true,
					cwd: 'source/assets/scss',
					src: ['*.scss', '!_*.scss'],
					dest: 'distribution/guide/assets/style',
					ext: '.css'
				},
				{
					expand: true,
					cwd: 'source/modules',
					src: ['**/*.scss'],
					dest: 'distribution/guide/modules',
					ext: '.css'
				}
			]
		},
		guide: {
			options: {
				sourcemap: false,
				style: 'expanded'
			},
			files: [
				{
					expand: true,
					cwd: 'source/assets/scss',
					src: ['*.scss', '!_*.scss'],
					dest: 'guide/assets/style',
					ext: '.css'
				},
				{
					expand: true,
					cwd: 'source/modules',
					src: ['**/*.scss'],
					dest: 'guide/modules',
					ext: '.css'
				}
			]
		}
	};
}

module.exports = getConfiguration;
