module.exports = function (grunt) {
	'use strict';
	grunt.registerTask(
		'developServer',
		'Setup web dir for development and watch source',
		function (mode) {

			var tasks = [
				'clean:development',
				'symlink:development',
				'compile-html:development',
				'copy:development',
				'sass:developmentServer',
				'concat:development',
				'sitemap:development'
			];

			if(mode !== 'no-watch'){
				tasks.push('watch');
			}

			grunt.task.run(tasks);
		}
	);
};
