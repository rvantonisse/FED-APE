var compiler = require('../utilities/html-compiler');

module.exports = function (grunt) {
	'use strict';
	grunt.registerTask(
		'compile-html',
		'Compile all views & components for distribution.',
		/**
		 * ...
		 */
			function (mode) {

			mode = mode || 'deploy';

			var pkg = grunt.config('pkg');
			var project = {
				title: pkg.title,
				version: pkg.version
			};

			function compileComponentHtml (name, target) {
				var filename = name + '/_' + name + '.html';
				var template = compiler.getTemplate('/modules/components/' + filename);
				var componentsDir = compiler.getComponentsDir();
				var html = template.render({
					'project': project,
					'webRoot': '../../../' + target,
					'pathToAssets': compiler.pathToAssets,
					'mode': mode
				});
				grunt.file.write(componentsDir + filename, html);
				grunt.log.writeln('Compiled component to '+ componentsDir + filename);
				return html;
			}

			function compileViewHtml (name) {
				var filename = name + '/' + name + '.html';
				var template = compiler.getTemplate('/modules/views/' + filename);
				var viewsDir = compiler.getViewsDir();
				var html = template.render({
					'name': name,
					'project': project,
					'webRoot': '../../../',
					'pathToAssets': compiler.pathToAssets,
					'pathToGuide': './',
					'mode': mode
				});
				grunt.file.write(viewsDir + filename, html);
				grunt.log.writeln('Compiled view to '+ viewsDir + filename);
				return html;
			}

			function compileViewHtmlWithContent (name, target) {
				var filename = name + '/' + name + '.html';
				var template = compiler.getTemplate('/modules/views/' + filename);
				var contents = readContents();
				var html = template.render({
					'name': name,
					'project': project,
					'content': contents,
					'webRoot': '../../../',
					'pathToAssets': compiler.pathToAssets,
					'pathToGuide' : './',
					'mode': mode
				});

				if (name === 'home') {
					grunt.file.write(target + '/index.html', html);
				} else {
					grunt.file.write(target + '/'+name+'/index.html', html);
				}
				return html;
			}

			function compileContent (name, type, target) {
				var sourceFilename = '/content/' + type + '/' + name + '/_' + name + '.html';
				var targetFilename = name + '/index.html';
				var template = compiler.getContentTemplate(sourceFilename);
				var contentDir = target + '/'+type+'/';
				var content = readContent(type, name);
				var html = template.render({
					'name': name,
					'project': project,
					'content': content,
					'type': type,
					'webRoot': '../../../',
					'pathToAssets': compiler.pathToAssets,
					'mode': mode
				});

				grunt.file.write(contentDir + targetFilename, html);
				grunt.log.writeln('Compiled view to '+ contentDir + targetFilename);
				return html;
			}

			function readContents () {
				var result = {};
				var content = grunt.file.readJSON(grunt.config.get('contentIndex'));
				var types = ['pattern', 'documentation'];
				types.forEach(function(type) {
					var items = [];
					var itemID = 0;
					content[type].forEach(function(item){
						items.push( readContent(type, item) );
						itemID++;
					});
					result[type] = items.sort(sortByDateDescWithSticky);
				});

				return(result);
			}

			function readContent (type, name) {
				var content = grunt.file.readJSON(grunt.config.get('contentIndex'));
				var metaFile = 'source/content/'+type+'/'+name+'/_meta.json';
				var contentMeta = grunt.file.readJSON(metaFile);

				// check if "isCaseStudy exists, if so set to 'case'
				if (type === 'pattern') {
					if(contentMeta[type].hasOwnProperty('isCase')) {
						if (contentMeta[type].isCase === true) {
							contentMeta[type].isCase = 'case';
						}
					} else {
						contentMeta[type].isCase = '';
					}
				}
				return(contentMeta[type]);
			}

			function writeContent(path, file) {
				var content = readContents();
				var contentString = JSON.stringify(content);

				if (!grunt.file.exists(path)) {
					grunt.file.mkdir(path);
				}

				grunt.file.write(path +'/' + file, contentString);
				grunt.log.writeln('Written data to '+ path +'/' + file);
			}

			function sortByDateDescWithSticky(a, b) {
				var dateA = new Date(a.date).getTime();
				var dateB = new Date(b.date).getTime();
				var stickyA = getSticky(a);
				var stickyB = getSticky(b);

				if (stickyA === true && stickyB === false) {
					return -1;
				} else if ( stickyA === false && stickyB === true) {
					return 1;
				} else {
					if (dateA < dateB) {
						return 1;
					} else if (dateA > dateB) {
						return -1;
					}
					return 0;
				}
			}

			function getSticky(data) {
				if (data.hasOwnProperty('isSticky')) {
					return data.isSticky;
				} else {
					return false;
				}
			}

			switch (mode) {
			case 'development':

				compiler.setBaseDir('web');
				compiler.getViews().forEach(function(obj){
					compileViewHtmlWithContent(obj, 'web');
				});

				var developContentType = ['documentation', 'pattern'];
				developContentType.forEach(function(type) {
					compiler.getContents(type).forEach(function(obj) {
						compileContent(obj,type, 'web');
					});
				});

				// write the content json data to the web folder
				writeContent('web/data', 'content.json');
				break;

			case 'deploy':
				compiler.setBaseDir('distribution');
				compiler.getViews().forEach(function(obj) {
					compileViewHtmlWithContent(obj, 'distribution');
				});

				var deployContentType = ['documentation', 'pattern'];
				deployContentType.forEach(function(type) {
					compiler.getContents(type).forEach(function(obj) {
						compileContent(obj,type, 'distribution');
					});
				});
				// write the content json data to the web folder
				writeContent('distribution/data', 'content.json');

				break;

			case 'guide':
				compiler.setBaseDir('guide');
				compiler.getComponents().forEach(compileComponentHtml);
				compileViewHtml('_style-guide');
				compiler.getViews().forEach(compileViewHtml);
				break;
			}
		}
	);
};
