module.exports = function (grunt) {
	'use strict';
	grunt.registerTask(
		'create-sitemap',
		'Created the sitemap in the web for debugging.',
		function (mode) {

			var tasks = [
				'sitemap:develop'
			];

			grunt.task.run(tasks);

		}
	);
};
