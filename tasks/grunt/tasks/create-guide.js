module.exports = function (grunt) {
	'use strict';
	grunt.registerTask(
		'create-guide',
		'Created the front-end guide in /guide.',
		function (mode) {

			mode = mode || 'guide';

			var tasks = [
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
				// uglify base.css, main.css?
				'clean:guide-cleanup'
				//'compress:guide'
			];

			if(mode !== 'no-watch'){
				tasks.push('watch');
			}

			grunt.task.run(tasks);

		}
	);
};