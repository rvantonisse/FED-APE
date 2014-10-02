/**
 * Grunt configuration for imagemin task
 */
function getConfiguration(grunt) {
	'use strict';
	return {
		source: {
			files: [{
				expand: true,
				cwd: 'source/',
				src: [
					'**/*.{png,jpg,gif}',
					'!**/*.min.{png,jpg,gif}'
				],
				dest: 'source/',
				rename: function(dest, src) {
					var index = src.lastIndexOf('.');
					return dest + '/' + src.substring(0, index) + '.min' + src.substring(index);
				}
			}]
		}
	};
}

module.exports = getConfiguration;