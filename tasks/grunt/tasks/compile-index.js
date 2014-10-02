var compiler = require('../utilities/html-compiler');

module.exports = function (grunt) {
	'use strict';
	grunt.registerTask(
		'compile-index',
		'Compile index file for all views & components.',
		/**
		 *
		 */
			function (mode) {

			mode = mode || 'deploy';

			var pkg = grunt.config('pkg');
			var project = {
				title: pkg.title,
				version: pkg.version
			};

			var webRoot = './';
			var template = compiler.getTemplate('modules/views/_app-index/app-index.html');

			var html = template.render({
				'name': 'Front-end Guide',
				'project': project,
				'webRoot': webRoot,
				'pathToAssets': compiler.pathToAssets,
				'pathToGuide': webRoot + 'guide/',
				'components': compiler.getComponents(),
				'views': compiler.getViews(),
				'mode': mode
			});

			if(mode === 'guide' ) {
				compiler.setBaseDir('guide');
				grunt.file.write('guide/index.html', html);
			}
		}
	);
};
