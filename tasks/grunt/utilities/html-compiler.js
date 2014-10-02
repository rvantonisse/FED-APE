var fs = require('fs');
var grunt = require('grunt');
var nunjucks = require('nunjucks');

(function(){
	'use strict';

	var baseDir = 'distribution';

	function setBaseDir(name){
		baseDir = name;
	}

	function getModulesDir(dir){
		dir = dir || baseDir;
		return dir + '/modules/';
	}
	function getComponentsDir(dir){
		return getModulesDir(dir) + 'components/';
	}
	function getViewsDir(dir){
		return getModulesDir(dir) + 'views/';
	}

	function getContentDir(dir){
		dir = dir || baseDir;
		return dir + '/content/';
	}

	function getPortfolioDir(dir){
		return getContentDir(dir) + 'portfolio/';
	}

	var pathToAssets = '/assets/';

	var env = new nunjucks.Environment([
		//new nunjucks.FileSystemLoader(getModulesDir('source'))
		new nunjucks.FileSystemLoader('source')
	]);

	var contentEnv = env;

	env.addFilter('niceDate', function(str) {
		var monthsNL = ['januari', 'februari', 'maart', 'april', 'mei', 'juni','juli','augustus','september','oktober', 'november', 'december'];
		var items = str.split('-');
		if (items.length === 3) {
			var day = parseInt(items[2]);
			var month = monthsNL[parseInt(items[1]) - 1];
			var year = parseInt(items[0]);
			var dateFormatted = day + ' ' + month + ' ' + year;
			return dateFormatted;
		} else {
			return 'invalid input format';
		}
	});

	function isNotUnderscored (str) {
		return !(str.substring(0,1).match(/_/g));
	}

	function getTemplate (path) {
		return env.getTemplate(path);
	}

	function getContentTemplate (path) {
		return contentEnv.getTemplate(path);
	}

	function getComponents () {
		return fs.readdirSync(getComponentsDir('source'))
			.filter(isNotUnderscored)
			.filter(function(name){
				return grunt.file.isDir(getComponentsDir('source') + name);
			});
	}

	function getViews () {
		return fs.readdirSync(getViewsDir('source'))
			.filter(isNotUnderscored)
			.filter(function(name){
				return grunt.file.isDir(getViewsDir('source') + name);
			});
	}

	function getContents (type) {
		return fs.readdirSync(getContentDir('source') + '/' + type)
			.filter(isNotUnderscored)
			.filter(function(name){
				return grunt.file.isDir(getContentDir('source') + '/' + type + '/' + name);
			})
	}

	function getPortfolio () {
		return fs.readdirSync(getPortfolioDir('source'))
			.filter(isNotUnderscored)
			.filter(function(name){
				return grunt.file.isDir(getPortfolioDir('source') + name);
			});
	}

	module.exports = {
		getModulesDir: getModulesDir,
		getComponentsDir: getComponentsDir,
		getViewsDir: getViewsDir,
		getContentDir: getContentDir,
		getPortfolioDir: getPortfolioDir,
		pathToAssets: pathToAssets,
		getTemplate: getTemplate,
		getContentTemplate: getContentTemplate,
		getComponents: getComponents,
		getViews: getViews,
		getContents: getContents,
		getPortfolio: getPortfolio,
		setBaseDir: setBaseDir
	};

}());