/**
 * Grunt configuration for clean task
 */
function getConfiguration(grunt) {
	'use strict';
	return {
		development: [
			'web'
		],
		distribution: [
			'distribution'
		],
		guide: [
			'guide'
		],
		'distribution-cleanup': [
			'distribution/assets/scripts.json',
			'distribution/assets/scss',
			'distribution/assets/style/guide.css',
			'distribution/guide/**/*.scss',
			'distribution/modules',
			'distribution/vendor/app-guide-font',
			'distribution/vendor/nunjucks',
			'distribution/vendor/prismjs',
			'distribution/bootstrap.js',
			'distribution/router.js',
			'distribution/assets/style/debug.css',
			'distribution/assets/scripts/debug.js'
			//'distribution/stubs'
		],
		'guide-cleanup': [
			'guide/assets/scripts.json',
			'guide/assets/scss',
			'guide/assets/style/guide.css',
			'guide/guide/**/*.scss',
			'guide/modules/**/*.scss',
			'guide/modules/components/_*',
			//'guide/modules/views/_*',
			'guide/modules/index.json',
			'guide/vendor/app-guide-font',
			'guide/vendor/nunjucks',
			'guide/vendor/prismjs',
			'guide/bootstrap.js',
			'guide/router.js'
			//'guide/stubs'
		]
	};
}

module.exports = getConfiguration;