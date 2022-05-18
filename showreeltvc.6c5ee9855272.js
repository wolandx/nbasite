jQuery(document).ready(function(){

	function showShowreeltvc() {

		if (window.innerWidth > 769) {
			$('.top .info').fadeOut().promise().done(function() {

				$('.top .videotvc').fadeIn().promise().done(function() {

					$('.top .videotvc').css('display', 'inline-block')
				})
				$('.top .videotvc video')[0].play()
			})
		} else {

			$('.top .videotvc').fadeIn().promise().done(function() {

				$('.top .videotvc').css('display', 'inline-block')
			})
			$('.top .videotvc video')[0].play()
		}
	}

	function hideShowreeltvc() {

		$('.top .videotvc').fadeOut().promise().done(function() {

			$('.top .info').fadeIn()
			$('.top .videotvc video')[0].pause()
			$('.top .videotvc video')[0].currentTime = 0
			$('.top .info').removeAttr('style')
			$('.top .videotvc').removeAttr('style')
		})
	}

	function noContextMenu(){
		let noContext = document.getElementById('noContext');
		console.log("test");
		noContext.addEventListener('contextmenu', e => {
  		e.preventDefault();
	});
	}

	$('.showreeltvc').click(showShowreeltvc)
	$('#hide-videotvc').click(hideShowreeltvc)
	noContextMenu()
});
