/**
 * Grunt configuration for cssmin task
 */
function getConfiguration(grunt) {
	'use strict';
	return {
		distribution: {
			options: {
				banner: '/* de Voorhoede */'
			},
			files: {
				'distribution/assets/style/main.css': ['distribution/assets/style/*.css', '!distribution/assets/style/guide.css'],
				'distribution/guide/assets/style/guide.css': ['distribution/assets/style/*.css']
			}
		}
	};
}

module.exports = getConfiguration;