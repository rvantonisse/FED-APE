var modulesIndex = require('../utilities/content-index');
var prompt = require('../utilities/prompt');

module.exports = function (grunt) {
    'use strict';
    grunt.registerTask(
        'remove-documentation',
        'Remove a documentation item by name.',
        /**
         * Remove documentation's directory and remove from indices.
         *
         * @param {String} documentationName
         */
            function (documentationName) {

            // get documentation name from config if undefined
            var documentationNameConfigKey = grunt.task.current.name + '.documentationName';
            var isConfirmedConfigKey = grunt.task.current.name + '.isConfirmed';
            documentationName = documentationName || grunt.config(documentationNameConfigKey);

            // if documentation name is still undefined, open prompt for it
            if(!documentationName) {
                prompt(grunt.task.current.name)
                    .addQuestion({
                        config: documentationNameConfigKey,
                        type: 'list',
                        message: 'Select documentation to remove',
                        choices: modulesIndex.listDocumentation()
                    })
                    .addQuestion({
                        config: isConfirmedConfigKey,
                        type: 'confirm',
                        message: 'Confirm remove'
                    })
                    .open();
                return true;
            }

            if(!modulesIndex.contentExists('documentation',documentationName)){
                grunt.log.error('documentation with name `' + documentationName + '` does not exist.');
                return false;
            }

            function removeDocumentation () {
                var documentationDir = 'source/content/documentation/';
                var webDocumentationDir = 'web/documentation/';
                // run custom clean for documentation
                grunt.config('clean.documentation', [
                        documentationDir + documentationName,
                        webDocumentationDir + documentationName,
                        webDocumentationDir + 'index.html'
                ]);
                grunt.task.run('clean:documentation');

                // Remove from web/ folder and re-index
                grunt.task.run('compile-html:development');

                grunt.log.success(
                        'Removed `' + documentationName + '` documentation from `' + documentationDir + '`.'
                );
                modulesIndex.removeContent('documentation', documentationName);
            }

            var isConfirmed = grunt.config(isConfirmedConfigKey);
            if (isConfirmed) {
                removeDocumentation();
            }

            return true;
        }
    );
};
