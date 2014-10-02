/**
 * Grunt configuration for copy task
 */
function getConfiguration(grunt) {
	'use strict';
	return {
		development: {
			files: [
				{
					src:  'web/modules/views/_style-guide/_style-guide.html',
					dest: 'web/guide/style-guide.html'
				},
				{
					expand:true,
					cwd: 'source/content',
					src: ['**/media/*', '**/scripts/*'],
					dest: 'web'
				},
				{
					expand: true,
					cwd: 'source/vendor/',
					src:['zepto.min.js','jquery-1.11.0.min.js'],
					dest: 'web/assets/scripts/'
				},
				{
					expand: true,
					cwd: 'source/assets/images/favicons',
					src: '*',
					dest: 'web/'
				},
				{
					expand: true,
					cwd: 'source',
					src: '*.txt',
					dest: 'web/'
				}
			]
		},
		distribution: {
			files: [
				{
					expand:true,
					cwd: 'source/content',
					src: ['**/media/*', '**/scripts/*'],
					dest: 'distribution'
				},
				{
					expand: true,
					cwd: 'source/assets/',
					src: [ 'fonts/**','images/**' ],
					dest: 'distribution/assets/'
				},
				{
					expand: true,
					cwd: 'source/',
					src: [
						'vendor/prismjs/**'
					],
					dest: 'distribution/guide/'
				},
				{
					expand: true,
					cwd: 'source/vendor/',
					src:['zepto.min.js','jquery-1.11.0.min.js'],
					dest: 'distribution/assets/scripts/'
				},
				{
					expand: true,
					cwd: 'source/assets/images/favicons',
					src: '*',
					dest: 'distribution/'
				},
				{
					expand: true,
					cwd: 'source',
					src: '*.txt',
					dest: 'distribution/'
				}
			]
		},
		'distribution-guide': {
			files: [
				{
					expand: true,
					cwd: 'guide/',
					src: '**',
					dest: 'distribution/guide/'
				}
			]
		},
		'distribution-style-guide': {
			files: [
				{
					expand: true,
					cwd: 'source/',
					src: [
						'vendor/app-guide-font/**'
					],
					dest: 'distribution/guide/guide/'
				},
				{
					expand: true,
					cwd: 'guide/assets/style/',
					src: ['guide.css', 'debug.css'],
					dest: 'distribution/guide/guide/'
				},
				{
					src:  'guide/modules/views/_style-guide/_style-guide.html',
					dest: 'distribution/guide/guide/style-guide.html'
				}
			]
		},
		guide: {
			files: [
				{
					expand: true,
					cwd: 'source/assets/',
					src: ['images/**', 'fonts/**'],
					dest: 'guide/assets'
				},
				{
					expand: true,
					cwd: 'source/',
					src: [
						'vendor/prismjs/**'
					],
					dest: 'guide/guide/'
				},
				{
					expand: true,
					cwd: 'source/assets/images/favicons',
					src: '*',
					dest: 'guide/'
				}
			]
		},
		'style-guide': {
			files: [
				{
					expand: true,
					cwd: 'source/',
					src: [
						'vendor/app-guide-font/**'
					],
					dest: 'guide/guide/'
				},
				{
					expand: true,
					cwd: 'guide/assets/style/',
					src: ['guide.css', 'debug.css'],
					dest: 'guide/guide/'
				},
				{
					src:  'guide/modules/views/_style-guide/_style-guide.html',
					dest: 'guide/guide/style-guide.html'
				},
				{
					expand: true,
					cwd: 'source/assets/images/favicons',
					src: '*',
					dest: 'guide/guide/'
				}
			]
		}
	};
}

module.exports = getConfiguration;