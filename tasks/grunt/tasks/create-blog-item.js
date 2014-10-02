var contentIndex = require('../utilities/content-index');
var prompt = require('../utilities/prompt');

module.exports = function (grunt) {
	'use strict';
	grunt.registerTask(
		'create-blog-item',
		'Create new blogItem.',
		/**
		 * Create new blogItem directory with HTML + SCSS + README
		 * based on blogItem template.
		 *
		 * @param {String} blogName
		 */
			function (blogName) {

			var file = grunt.file;

			// get blogItem name from config if undefined
			var blogNameConfigKey = grunt.task.current.name + '.blogName';
			blogName = blogName || grunt.config(blogNameConfigKey);

			// if blogItem name is still undefined, open prompt for it
			if(!blogName) {
				prompt(grunt.task.current.name)
					.addQuestion({
						config: blogNameConfigKey,
						type: 'input',
						message: 'Enter name for new blog item using slug'
					})
					.open();
				return true;
			}

			if(contentIndex.contentExists('blog',blogName)){
				grunt.log.error('A blog item with name `'+ blogName +'` already exists');
				return false;
			}

			var sourceDir = 'tasks/grunt/templates/blog';
			var destinationDir = 'source/content/blog/' + blogName;

			/**
			 * @param {String} filename
			 * @param {String} [alias]
			 * @returns {string}
			 */
			function getTemplate (filename, alias) {
				var name = alias || blogName;
				var date = new Date();
				var year = date.getFullYear().toString();
				var month = (date.getMonth()+1).toString();
				var day = date.getDate().toString();

				if (parseInt(month) < 10) { month = '0' + month; }
				if (parseInt(day) < 10) { day = '0' + day; }

				var parsedDate = year + '-' + month + '-' + day;
				return file.read(sourceDir + '/' + filename)
					.replace(/\$_BLOG_ITEM_NAME_\$/g, name)
					.replace(/\$_CSS_CLASS_\$/g, blogName)
					.replace(/\$_BLOG_ITEM_DATE_\$/g, parsedDate );
			}

			file.mkdir(destinationDir);

			file.mkdir(destinationDir + '/media');
			file.mkdir(destinationDir + '/scripts');


			file.write(destinationDir + '/_' + blogName + '.html',
				getTemplate('_blogItem.html'));

			file.write(destinationDir + '/_' + blogName + '.scss',
				getTemplate('_blogItem.scss.template'));

			file.write(destinationDir + '/_meta.json',
				getTemplate('_meta.json'));

			file.write(destinationDir + '/README.md', getTemplate('README.md'));

			grunt.log.success(
				'Created new blog item `' + blogName + '` in `' + destinationDir + '`.'
			);

			contentIndex.addContent('blog', blogName);

			// Add newly created item to web/ folder and re-index
			grunt.task.run('compile-html:development');

			return true;
		}
	);
};
