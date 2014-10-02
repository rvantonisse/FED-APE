var contentIndex = require('../utilities/content-index');
var prompt = require('../utilities/prompt');

module.exports = function (grunt) {
    'use strict';
    grunt.registerTask(
        'create-pattern',
        'Create new pattern.',
        /**
         * Create new pattern directory with HTML + SCSS + README
         * based on pattern template.
         *
         * @param {String} patternName
         */
            function (patternName) {

            var file = grunt.file;

            // get pattern name from config if undefined
            var patternNameConfigKey = grunt.task.current.name + '.patternName';
            patternName = patternName || grunt.config(patternNameConfigKey);

            // if pattern name is still undefined, open prompt for it
            if(!patternName) {
                prompt(grunt.task.current.name)
                    .addQuestion({
                        config: patternNameConfigKey,
                        type: 'input',
                        message: 'Enter name for new pattern item using slug'
                    })
                    .open();
                return true;
            }

            if(contentIndex.contentExists('pattern',patternName)){
                grunt.log.error('A pattern with name `'+ patternName +'` already exists');
                return false;
            }

            var sourceDir = 'tasks/grunt/templates/pattern';
            var destinationDir = 'source/content/pattern/' + patternName;

            /**
             * @param {String} filename
             * @param {String} [alias]
             * @returns {string}
             */
            function getTemplate (filename, alias) {
                var name = alias || patternName;
                var date = new Date();
                var year = date.getFullYear().toString();
                var month = (date.getMonth()+1).toString();
                var day = date.getDate().toString();

                if (parseInt(month) < 10) { month = '0' + month; }
                if (parseInt(day) < 10) { day = '0' + day; }

                var parsedDate = year + '-' + month + '-' + day;
                return file.read(sourceDir + '/' + filename)
                    .replace(/\$_PATTERN_NAME_\$/g, name)
                    .replace(/\$_CSS_CLASS_\$/g, patternName)
                    .replace(/\$_PATTERN_DATE_\$/g, parsedDate );
            }

            file.mkdir(destinationDir);

            file.mkdir(destinationDir + '/media');
            file.mkdir(destinationDir + '/scripts');


            file.write(destinationDir + '/_' + patternName + '.html',
                getTemplate('_pattern.html'));

            file.write(destinationDir + '/_' + patternName + '.scss',
                getTemplate('_pattern.scss.template'));

            file.write(destinationDir + '/_meta.json',
                getTemplate('_meta.json'));

            file.write(destinationDir + '/README.md', getTemplate('README.md'));

            grunt.log.success(
                    'Created new pattern item `' + patternName + '` in `' + destinationDir + '`.'
            );

            contentIndex.addContent('pattern', patternName);

            // Add newly created item to web/ folder and re-index
            grunt.task.run('compile-html:development');

            return true;
        }
    );
};
