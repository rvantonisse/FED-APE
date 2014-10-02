/**
 * Grunt configuration for jsbeautifier task
 */
function getConfiguration(grunt) {
	'use strict';
	// https://github.com/vkadam/grunt-jsbeautifier#config
	return {
		'distribution-components': {
			src : [
				'distribution/modules/components/**/*.html'
				//'distribution/modules/components/**/*.css'
			],
			options : {
				html: {
					indentChar: '\t',
					indentSize: 1,
					maxPreserveNewlines: 1,
					preserveNewlines: false
				},
				css: {
					indentChar: '\t',
					indentSize: 1
				}
			}
		},
		'distribution-guide-components': {
			src : [
				'distribution/guide/modules/components/**/*.html'
				//'distribution/modules/components/**/*.css'
			],
			options : {
				html: {
					indentChar: '\t',
					indentSize: 1,
					maxPreserveNewlines: 1,
					preserveNewlines: false
				},
				css: {
					indentChar: '\t',
					indentSize: 1
				}
			}
		},

		'guide-components': {
			src : [
				'guide/modules/components/**/*.html'
				//'guide/modules/components/**/*.css'
			],
			options : {
				html: {
					indentChar: '\t',
					indentSize: 1,
					maxPreserveNewlines: 1,
					preserveNewlines: false
				},
				css: {
					indentChar: '\t',
					indentSize: 1
				}
			}
		},

		'distribution-html': {
			src : [
				'distribution/index.html',
				'distribution/**/*.html'
			],
			options : {
				html: {
					indentChar: ' ',
					indentSize: 4,
					maxPreserveNewlines: 0,
					preserveNewlines: false,
					wrapLineLength: 100
				}
			}
		},
		'guide-html': {
			src : [
				'guide/index.html',
				'guide/modules/components/**/*.html',
				'guide/modules/views/**/*.html'
			],
			options : {
				html: {
					indentChar: ' ',
					indentSize: 4,
					maxPreserveNewlines: 0,
					preserveNewlines: false,
					wrapLineLength: 100
				}
			}
		},
		'distribution-guide-html': {
			src : [
				'distribution/guide/index.html',
				'distribution/guide/modules/components/**/*.html',
				'distribution/guide/modules/views/**/*.html'
			],
			options : {
				html: {
					indentChar: ' ',
					indentSize: 4,
					maxPreserveNewlines: 0,
					preserveNewlines: false,
					wrapLineLength: 100
				}
			}
		}
	};
}

module.exports = getConfiguration;