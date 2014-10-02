/**
 * Grunt configuration for symlink task
 */
function getConfiguration(grunt) {
	'use strict';
	return {
		development: {
			files: [
				{
					expand: true,
					overwrite: false,
					cwd: 'source/assets/',
					src: ['fonts','images'],
					dest: 'web/assets/',
					filter: 'isDirectory'
				}
			]
		}
	};
}

module.exports = getConfiguration;