jQuery(document).ready(function(){

	function showShowreel() {

		if (window.innerWidth > 769) {
			$('.top .info').fadeOut().promise().done(function() {

				$('.top .video').fadeIn().promise().done(function() {

					$('.top .video').css('display', 'inline-block')
				})
				$('.top .video video')[0].play()
			})
		} else {

			$('.top .video').fadeIn().promise().done(function() {

				$('.top .video').css('display', 'inline-block')
			})
			$('.top .video video')[0].play()
		}
	}

	function hideShowreel() {

		$('.top .video').fadeOut().promise().done(function() {

			$('.top .info').fadeIn()
			$('.top .video video')[0].pause()
			$('.top .video video')[0].currentTime = 0
			$('.top .info').removeAttr('style')
			$('.top .video').removeAttr('style')
		})
	}

	function noContextMenu(){
		let noContext = document.getElementById('noContext');
		console.log("test");
		noContext.addEventListener('contextmenu', e => {
  		e.preventDefault();
	});
	}

	$('.showreel').click(showShowreel)
	$('#hide-video').click(hideShowreel)
	noContextMenu()
});
