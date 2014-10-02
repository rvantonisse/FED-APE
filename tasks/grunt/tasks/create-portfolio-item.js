var contentIndex = require('../utilities/content-index');
var prompt = require('../utilities/prompt');

module.exports = function (grunt) {
	'use strict';
	grunt.registerTask(
		'create-portfolio-item',
		'Create new portfolioItem.',
		/**
		 * Create new portfolioItem directory with HTML + SCSS + README
		 * based on portfolioItem template.
		 *
		 * @param {String} portfolioName
		 */
			function (portfolioName) {

			var file = grunt.file;

			// get portfolioItem name from config if undefined
			var portfolioNameConfigKey = grunt.task.current.name + '.portfolioName';
			portfolioName = portfolioName || grunt.config(portfolioNameConfigKey);

			// if portfolioItem name is still undefined, open prompt for it
			if(!portfolioName) {
				prompt(grunt.task.current.name)
					.addQuestion({
						config: portfolioNameConfigKey,
						type: 'input',
						message: 'Enter name for new portfolio item using slug'
					})
					.open();
				return true;
			}

			if(contentIndex.contentExists('portfolio',portfolioName)){
				grunt.log.error('A portfolio item with name `'+ portfolioName +'` already exists');
				return false;
			}

			var sourceDir = 'tasks/grunt/templates/portfolio';
			var destinationDir = 'source/content/portfolio/' + portfolioName;

			/**
			 * @param {String} filename
			 * @param {String} [alias]
			 * @returns {string}
			 */
			function getTemplate (filename, alias) {
				var name = alias || portfolioName;
				var date = new Date();
				var year = date.getFullYear().toString();
				var month = (date.getMonth()+1).toString();
				var day = date.getDate().toString();

				if (parseInt(month) < 10) { month = '0' + month; }
				if (parseInt(day) < 10) { day = '0' + day; }

				var parsedDate = year + '-' + month + '-' + day;
				return file.read(sourceDir + '/' + filename)
					.replace(/\$_PORTFOLIO_ITEM_NAME_\$/g, name)
					.replace(/\$_CSS_CLASS_\$/g, portfolioName)
					.replace(/\$_PORTFOLIO_ITEM_DATE_\$/g, parsedDate );
			}

			file.mkdir(destinationDir);

			file.mkdir(destinationDir + '/media');
			file.mkdir(destinationDir + '/scripts');

			file.write(destinationDir + '/_' + portfolioName + '.html',
				getTemplate('_portfolioItem.html'));

			file.write(destinationDir + '/_' + portfolioName + '.scss',
				getTemplate('_portfolioItem.scss.template'));

			file.write(destinationDir + '/_meta.json',
				getTemplate('_meta.json'));

			file.write(destinationDir + '/README.md', getTemplate('README.md'));

			grunt.log.success(
				'Created new portfolio item `' + portfolioName + '` in `' + destinationDir + '`.'
			);

			contentIndex.addContent('portfolio', portfolioName);

			// Add newly created item to web/ folder and re-index
			grunt.task.run('compile-html:development');

			return true;
		}
	);
};
