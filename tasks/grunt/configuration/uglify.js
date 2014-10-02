/**
 * Grunt configuration for uglify task
 */
function getConfiguration(grunt) {
    'use strict';
    return {
        distribution: {
			options: {
				sourceMap: true,
				sourceMapName: 'distribution/assets/scripts/main.min.js.map'
			},
            files: {
				'distribution/assets/scripts/main.min.js': [
					'distribution/assets/scripts/main.js'
				]
			}
        }
    };
}

module.exports = getConfiguration;