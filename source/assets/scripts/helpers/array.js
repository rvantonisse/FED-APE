/**
 * Collection of global helpers
 * @type {object} helpers
 */
var helpers = helpers || {};

(function(){
	'use strict';

	/**
	 * Collection of Array helpers
	 * @type {object} helpers.array
	 */
	helpers.array = helpers.array || {};

	/**
	 *
	 * @param {NodeList} collection
	 * @param {Function} action
	 */
	function forEach(collection, action){
		for(var index = 0, length = collection.length; index < length; index++){
			action(collection[index], index);
		}
	}
	helpers.array.forEach = forEach;

}());