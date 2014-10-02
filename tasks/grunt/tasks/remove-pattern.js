var modulesIndex = require('../utilities/content-index');
var prompt = require('../utilities/prompt');

module.exports = function (grunt) {
    'use strict';
    grunt.registerTask(
        'remove-pattern',
        'Remove a pattern by name.',
        /**
         * Remove pattern's directory and remove from indices.
         *
         * @param {String} patternName
         */
            function (patternName) {

            // get pattern name from config if undefined
            var patternNameConfigKey = grunt.task.current.name + '.patternName';
            var isConfirmedConfigKey = grunt.task.current.name + '.isConfirmed';
            patternName = patternName || grunt.config(patternNameConfigKey);

            // if pattern name is still undefined, open prompt for it
            if(!patternName) {
                prompt(grunt.task.current.name)
                    .addQuestion({
                        config: patternNameConfigKey,
                        type: 'list',
                        message: 'Select pattern to remove',
                        choices: modulesIndex.listPattern()
                    })
                    .addQuestion({
                        config: isConfirmedConfigKey,
                        type: 'confirm',
                        message: 'Confirm remove'
                    })
                    .open();
                return true;
            }

            if(!modulesIndex.contentExists('pattern',patternName)){
                grunt.log.error('pattern with name `' + patternName + '` does not exist.');
                return false;
            }

            function removePattern () {
                var patternDir = 'source/content/pattern/';
                var webPatternDir = 'web/pattern/';
                // run custom clean for pattern
                grunt.config('clean.pattern', [
                        patternDir + patternName,
                        webPatternDir + patternName,
                        webPatternDir + 'index.html'
                ]);
                grunt.task.run('clean:pattern');

                // Remove from web/ folder and re-index
                grunt.task.run('compile-html:development');

                grunt.log.success(
                        'Removed `' + patternName + '` pattern from `' + patternDir + '`.'
                );
                modulesIndex.removeContent('pattern', patternName);
            }

            var isConfirmed = grunt.config(isConfirmedConfigKey);
            if (isConfirmed) {
                removePattern();
            }

            return true;
        }
    );
};
