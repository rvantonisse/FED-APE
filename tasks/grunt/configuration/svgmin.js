/**
 *
 */
function getConfiguration(grunt) {
	'use strict';
	return {
		distribution: {
			// https://github.com/sindresorhus/grunt-svgmin#documentation
			options: {
				// Configuration that will be passed directly to SVGO
//				plugins: [
//					{ cleanupEnableBackground: false },
//					{ removeViewBox: false },
//					{ removeUselessStrokeAndFill: false },
//					{ removeRasterImages: false }
//				]
			},
			files: [
				{
					expand: true,
					cwd: 'distribution/',
					src: ['**/*.svg'],
					dest: 'distribution/'
				}
			]
		}
	};
}

module.exports = getConfiguration;