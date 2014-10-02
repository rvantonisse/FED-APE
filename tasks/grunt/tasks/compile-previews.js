var compiler    = require('../utilities/html-compiler');
var marked      = require('marked');						// https://github.com/chjj/marked

module.exports = function (grunt) {
	'use strict';
	grunt.registerTask(
		'compile-previews',
		'Compile preview page for each component in distribution.',
		/**
		 *
		 */
		function () {
			var file = grunt.file;

			var previewer = compiler.getTemplate(
				'modules/views/_component-previewer/component-previewer.html');

			function compilePreview (name) {

				var componentDir = compiler.getComponentsDir() + name + '/';
				var webRoot = '../../..';

				var htmlFilename = componentDir + '_' + name + '.html';
				var html = file.exists(htmlFilename) ? file.read(htmlFilename) : '';

				var cssFilename = componentDir + '_' + name + '.css';
				var css = file.exists(cssFilename) ? file.read(cssFilename) : '';

				var jsFilename = componentDir + '_' + name + '.js';
				var js = file.exists(jsFilename) ? file.read(jsFilename) : '';

				var readmeFilename = componentDir + 'README.md';
				var readme = file.exists(readmeFilename) ? file.read(readmeFilename) : '';
				readme = marked(readme)
					.replace(/<code>/g, '<code class="language-unknown">'); // triggers primsjs css

				var previewerHtml = previewer.render({
					'name': name,
					'webRoot': webRoot,
					'pathToAssets': webRoot + compiler.pathToAssets,
					'pathToGuide': webRoot,
					'code': {
						'html': html,
						'css': css,
						'js': js,
						'readme': readme
					}
				});
				file.write(componentDir + 'preview.html', previewerHtml);
			}

			compiler.getComponents().forEach(compilePreview);
		}
	);
};
