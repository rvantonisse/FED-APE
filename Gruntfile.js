module.exports = function (grunt) {
	'use strict';

    // Load external configuration files by task name.
    var configuration = require('./tasks/grunt/configuration')(grunt, [
        'clean',
        'compress',
	    'concat',
        'connect',
        'copy',
        'csslint',
	    'cssmin',
		'imagemin',
        'jsbeautifier',
        'jshint',
	    'prompt',
        'sass',
	    'sitemap',
	    'symlink',
	    'svgmin',
        'uglify',
        'watch'
    ]);
    configuration.modulesIndex = 'source/modules/index.json';
	configuration.modulesScss  = 'source/assets/scss/_modules.scss';
    configuration.contentIndex = 'source/content/index.json';
    configuration.contentScss  = 'source/assets/scss/_content.scss';

    grunt.config.init(configuration);

	// Load all npm installed grunt tasks.
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// load all project grunt tasks.
	grunt.task.loadTasks('tasks/grunt/tasks');
	grunt.registerTask('default', ['task-wizard']);
};
