/**
 * Collection of global helpers
 * @type {object} helpers
 */
var helpers = helpers || {};

(function(){
	'use strict';

	/**
	 * Collection of effect helpers
	 * @type {object} helpers.effects
	 */
	helpers.effects = helpers.effects || {};

	/**
	 * FadeIn effect
	 * http://youmightnotneedjquery.com/#fade_in
	 * @param {HTMLElement} element
	 * @param {Duration} duration of the effect
	 */
	function fadeIn(element, duration, callback){
		var opacity = 0;

		element.style.opacity = 0;
		element.style.filter = '';

		var last = +new Date();
		var tick = function() {
			opacity += (new Date() - last) / duration;
			element.style.opacity = opacity;
			element.style.filter = 'alpha(opacity=' + (100 * opacity)|0 + ')';

			last = +new Date();

			if (opacity < 1) {
				(window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
			}
		};
		tick();
		callback();
	}
	helpers.effects.fadeIn = fadeIn;

}());

