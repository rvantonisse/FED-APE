var modulesIndex = require('../utilities/content-index');
var prompt = require('../utilities/prompt');

module.exports = function (grunt) {
	'use strict';
	grunt.registerTask(
		'remove-portfolio-item',
		'Remove a portfolio item by name.',
		/**
		 * Remove portfolio's directory and remove from indices.
		 *
		 * @param {String} portfolioName
		 */
			function (portfolioName) {

			// get portfolio name from config if undefined
			var portfolioNameConfigKey = grunt.task.current.name + '.portfolioName';
			var isConfirmedConfigKey = grunt.task.current.name + '.isConfirmed';
			portfolioName = portfolioName || grunt.config(portfolioNameConfigKey);

			// if portfolio name is still undefined, open prompt for it
			if(!portfolioName) {
				prompt(grunt.task.current.name)
					.addQuestion({
						config: portfolioNameConfigKey,
						type: 'list',
						message: 'Select portfolio to remove',
						choices: modulesIndex.listPortfolio()
					})
					.addQuestion({
						config: isConfirmedConfigKey,
						type: 'confirm',
						message: 'Confirm remove'
					})
					.open();
				return true;
			}

			if(!modulesIndex.contentExists('portfolio',portfolioName)){
				grunt.log.error('portfolio with name `' + portfolioName + '` does not exist.');
				return false;
			}

			function removePortfolio () {
				var portfolioDir = 'source/content/portfolio/';
				// run custom clean for portfolio
				grunt.config('clean.portfolio', [portfolioDir + portfolioName]);
				grunt.task.run('clean:portfolio');

				// Remove from web/ folder and re-index
				grunt.task.run('compile-html:development');

				grunt.log.success(
					'Removed `' + portfolioName + '` portfolio from `' + portfolioDir + '`.'
				);
				modulesIndex.removeContent('portfolio', portfolioName);
			}

			var isConfirmed = grunt.config(isConfirmedConfigKey);
			if (isConfirmed) {
				removePortfolio();
			}

			return true;
		}
	);
};
