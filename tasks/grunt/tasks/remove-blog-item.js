var modulesIndex = require('../utilities/content-index');
var prompt = require('../utilities/prompt');

module.exports = function (grunt) {
	'use strict';
	grunt.registerTask(
		'remove-blog-item',
		'Remove a blog item by name.',
		/**
		 * Remove blog's directory and remove from indices.
		 *
		 * @param {String} blogName
		 */
			function (blogName) {

			// get blog name from config if undefined
			var blogNameConfigKey = grunt.task.current.name + '.blogName';
			var isConfirmedConfigKey = grunt.task.current.name + '.isConfirmed';
			blogName = blogName || grunt.config(blogNameConfigKey);

			// if blog name is still undefined, open prompt for it
			if(!blogName) {
				prompt(grunt.task.current.name)
					.addQuestion({
						config: blogNameConfigKey,
						type: 'list',
						message: 'Select blog to remove',
						choices: modulesIndex.listBlog()
					})
					.addQuestion({
						config: isConfirmedConfigKey,
						type: 'confirm',
						message: 'Confirm remove'
					})
					.open();
				return true;
			}

			if(!modulesIndex.contentExists('blog',blogName)){
				grunt.log.error('blog with name `' + blogName + '` does not exist.');
				return false;
			}

			function removeBlog () {
				var blogDir = 'source/content/blog/';
				var webBlogDir = 'web/blog/';
				// run custom clean for blog
				grunt.config('clean.blog', [
					blogDir + blogName,
					webBlogDir + blogName,
					webBlogDir + 'index.html'
				]);
				grunt.task.run('clean:blog');

				// Remove from web/ folder and re-index
				grunt.task.run('compile-html:development');

				grunt.log.success(
					'Removed `' + blogName + '` blog from `' + blogDir + '`.'
				);
				modulesIndex.removeContent('blog', blogName);
			}

			var isConfirmed = grunt.config(isConfirmedConfigKey);
			if (isConfirmed) {
				removeBlog();
			}

			return true;
		}
	);
};
