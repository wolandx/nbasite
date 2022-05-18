jQuery(document).ready(function() {

	var length = $('.headshot.additional').length
	var delay = 4000

	function runSequence() {

		$('.headshot.additional').each(function(index) {

			var element = $(this)
			setTimeout(function() {

				element.fadeIn(1000)
			}, (index + 1) * delay)

			setTimeout(function() {

				element.fadeOut(1000)
			}, (index + 2.01) * delay)
		})
	}
	runSequence()
	setInterval(runSequence, (length + 1) * delay)
});
