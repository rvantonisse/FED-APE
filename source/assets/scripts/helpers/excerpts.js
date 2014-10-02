/**
 * Collection of global helpers
 * @type {object} helpers
 */
var helpers = helpers || {};

(function(){
	'use strict';

	/**
	 *
	 */
	helpers.excerpt = helpers.excerpt || {};

	var $showMoreLink = $('.js-show-more-link');

	function getExcerpts(view) {
		$.get('/data/content.json', function(data) {
			var excerptSelector = '.excerpt';
			var $excerpt = $(excerptSelector);
			var counter = $excerpt.length;
			var incrementCount = 5;
			var excerpts = data[view];
			var numberOfExcerpts = excerpts.length;

			// don't show 'show more link' as long as the number of excerpts is less than the
			// number of excerpts
			if (numberOfExcerpts > counter ) {
				$showMoreLink.removeClass('is-hidden');
			}

			function showMoreExcerpts() {
				var newCount = counter  + incrementCount;
				var hasReachedLastExcerpt = newCount >= numberOfExcerpts;
				var newExcerpts = excerpts.slice(counter, newCount);

				$.each(newExcerpts, function(index, excerpt) {
					// For each new excerpt,
					// clone the initial excerpt
					var $newExcerpt = $(excerptSelector).first().clone();

					// Replace content
					$newExcerpt.find('a').prop('href', excerpt.slug);
					$newExcerpt.find('h3').html(excerpt.title);
					$newExcerpt.find('p').html(excerpt.excerpt.text);
					$newExcerpt.find('img').prop
						('src', excerpt.slug +'/media/' + excerpt.excerpt.image)
						.prop('alt', (excerpt.excerpt.imageAltText || ''));

					// Insert cloned blog post after the last blog post
					$(excerptSelector).last().after($newExcerpt);

					// add odd/even class names
					var indexOfNewExcerpt = ($newExcerpt.index());
					$newExcerpt
						.children('a')
						.removeClass('odd even')
						.addClass(indexOfNewExcerpt % 2 === 0 ? 'even' : 'odd');
				});

				// as long as the last excerpt has not been reached,
				// then postCounter is set to newPostCount
				// if the last excerpt has been reached,
				// then postCounter is set to the total number of excerpts
				counter  = hasReachedLastExcerpt ? numberOfExcerpts : newCount;

				// don't show 'show more link' when the last excerpts has been reached
				if(hasReachedLastExcerpt) {
					$showMoreLink.addClass('is-hidden');
				}
			}
			showMoreExcerpts();

			// Make sure the background is expands with the added excerps
			if (helpers.hasOwnProperty('placeBackground')) {
				helpers.placeBackground();
			}
		});
	}

	$showMoreLink.on('click', function(event){
		var view = ($(this).data('view'));
		event.preventDefault();
		getExcerpts(view);
	});

})(('undefined' === typeof Zepto) ? jQuery : Zepto);
