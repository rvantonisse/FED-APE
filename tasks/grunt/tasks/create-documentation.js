var contentIndex = require('../utilities/content-index');
var prompt = require('../utilities/prompt');

module.exports = function (grunt) {
    'use strict';
    grunt.registerTask(
        'create-documentation',
        'Create new documentation.',
        /**
         * Create new documentation directory with HTML + SCSS + README
         * based on documentation template.
         *
         * @param {String} documentationName
         */
            function (documentationName) {

            var file = grunt.file;

            // get documentation name from config if undefined
            var documentationNameConfigKey = grunt.task.current.name + '.documentationName';
            documentationName = documentationName || grunt.config(documentationNameConfigKey);

            // if documentation name is still undefined, open prompt for it
            if(!documentationName) {
                prompt(grunt.task.current.name)
                    .addQuestion({
                        config: documentationNameConfigKey,
                        type: 'input',
                        message: 'Enter name for new documentation item using slug'
                    })
                    .open();
                return true;
            }

            if(contentIndex.contentExists('documentation',documentationName)){
                grunt.log.error('A documentation item with name `'+ documentationName +'` already exists');
                return false;
            }

            var sourceDir = 'tasks/grunt/templates/documentation';
            var destinationDir = 'source/content/documentation/' + documentationName;

            /**
             * @param {String} filename
             * @param {String} [alias]
             * @returns {string}
             */
            function getTemplate (filename, alias) {
                var name = alias || documentationName;
                var date = new Date();
                var year = date.getFullYear().toString();
                var month = (date.getMonth()+1).toString();
                var day = date.getDate().toString();

                if (parseInt(month) < 10) { month = '0' + month; }
                if (parseInt(day) < 10) { day = '0' + day; }

                var parsedDate = year + '-' + month + '-' + day;
                return file.read(sourceDir + '/' + filename)
                    .replace(/\$_DOCUMENTATION_NAME_\$/g, name)
                    .replace(/\$_CSS_CLASS_\$/g, documentationName)
                    .replace(/\$_DOCUMENTATION_DATE_\$/g, parsedDate );
            }

            file.mkdir(destinationDir);

            file.mkdir(destinationDir + '/media');
            file.mkdir(destinationDir + '/chapter');


            file.write(destinationDir + '/_' + documentationName + '.html',
                getTemplate('_documentation.html'));

            file.write(destinationDir + '/_' + documentationName + '.scss',
                getTemplate('_documentation.scss.template'));

            file.write(destinationDir + '/_meta.json',
                getTemplate('_meta.json'));

            file.write(destinationDir + '/README.md', getTemplate('README.md'));

            grunt.log.success(
                    'Created new documentation item `' + documentationName + '` in `' + destinationDir + '`.'
            );

            contentIndex.addContent('documentation', documentationName);

            // Add newly created item to web/ folder and re-index
            grunt.task.run('compile-html:development');

            return true;
        }
    );
};
