/**
 * Grunt configuration for sitemap task
 */
function getConfiguration(grunt) {
	'use strict';
	var homepage = 'http://voorhoede.nl';
	return {
		development: {
			siteRoot: 'web/',
			homepage: homepage
		},
		distribution: {
			siteRoot: 'distribution/',
			homepage: homepage
		}
	};
}

module.exports = getConfiguration;