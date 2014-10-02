var grunt = require('grunt');
var file = grunt.file;

function getIndexFilename() {
	'use strict';
	return grunt.config.get('contentIndex');
}

function listContent() {
	'use strict';
	var contentIndexFile = getIndexFilename();
	return grunt.file.readJSON(contentIndexFile);
}

function listDocumentation() {
	'use strict';
	return listContent().documentation;
}

function listPattern() {
	'use strict';
	return listContent().pattern;
}


function contentExists(type, name) {
	'use strict';
	var contentIndex = listContent();
	var collection = contentIndex[type];
	return collection.indexOf(name) >= 0;
}

function saveIndex(contentIndex) {
	'use strict';
	var contentIndexFile = getIndexFilename();

	file.write(contentIndexFile, JSON.stringify(contentIndex, null, '\t'));
	var documentationScss = contentIndex.documentation
		.filter(function(index){
			return file.exists('source/content/documentation/' + index + '/_' + index + '.scss');
		})
		.map(function(index){
			return '@import \'../../content/documentation/' + index + '/' + index + '\';';
		})
		.join('\n');

	var patternScss = contentIndex.pattern
		.filter(function(index){
			return file.exists('source/content/pattern/' + index + '/_' + index + '.scss');
		})
		.map(function(index){
			return '@import \'../../content/pattern/' + index + '/' + index + '\';';
		})
		.join('\n');

	var contentScss = file.read('tasks/grunt/templates/_content.scss.template')
		.replace(/\$_DOCUMENTATION_\$/g, documentationScss)
		.replace(/\$_PATTERN_\$/g, patternScss)


	var contentScssFile = grunt.config.get('contentScss');

	file.write(contentScssFile, contentScss);

}

function addContent(type, name) {
	'use strict';
	var contentIndex = listContent();
	var collection = contentIndex[type];

	if(contentExists(type, name)){
		console.log.warn('A '+ type +' with name `'+ name + '` already exists. Content not added.');
		return contentIndex;
	}

	collection.push(name);
	collection.sort(function(nameA, nameB){
		if(nameA < nameB) { return -1; }
		if(nameA > nameB) { return 1; }
		return 0;
	});

	saveIndex(contentIndex);
	grunt.log.success('Added `' + name + '` ' + type + ' to Content index (json & scss).');
	return contentIndex;
}

function removeContent(type, name) {
	'use strict';
	var contentIndex = listContent();
	var collection = contentIndex[type];

	if(!contentExists(type, name)){
		console.log.warn('No '+ type +' with name `'+ name + '`. Nothing removed.');
		return contentIndex;
	}

	var itemIndex = collection.indexOf(name);
	collection.splice(itemIndex, 1);
	saveIndex(contentIndex);

	grunt.log.success('Removed `' + name + '` ' + type + ' from Content index (json & scss).');
}

module.exports = {
	addContent: addContent,
	removeContent: removeContent,
	listContent: listContent,
	listDocumentation: listDocumentation,
	listPattern: listPattern,
	contentExists: contentExists
};