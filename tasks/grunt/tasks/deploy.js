module.exports = function (grunt) {
	'use strict';
	grunt.registerTask(
		'deploy',
		'Concatenates and minifies source files.',
		function () {
			grunt.task.run([
				// create web
				'clean:distribution',
				'copy:distribution',
				'sass:distribution',
				'cssmin:distribution',
				'concat:distribution',
				'compile-html',
				'clean:distribution-cleanup',
				'uglify:distribution',
				'jsbeautifier:distribution-html',
				'sitemap:distribution',
				//'compress:distribution',

				//create guide
				'clean:guide',
				'copy:guide',
				'sass:guide',
				'concat:guide',
				'compile-html:guide',
				'jsbeautifier:guide-components',
				'compile-previews',
				'compile-index:guide',
				'jsbeautifier:guide-html',
				'copy:style-guide',
				'clean:guide-cleanup',

				'copy:distribution-guide',
				'clean:guide'
			]);
		}
	);
};
