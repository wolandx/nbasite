jQuery(document).ready(function(){

	function showShowreelvoice() {

		if (window.innerWidth > 769) {
			$('.top .info').fadeOut().promise().done(function() {

				$('.top .videovoice').fadeIn().promise().done(function() {

					$('.top .videovoice').css('display', 'inline-block')
				})
				$('.top .videovoice video')[0].play()
			})
		} else {

			$('.top .videovoice').fadeIn().promise().done(function() {

				$('.top .videovoice').css('display', 'inline-block')
			})
			$('.top .videovoice video')[0].play()
		}
	}

	function hideShowreelvoice() {

		$('.top .videovoice').fadeOut().promise().done(function() {

			$('.top .info').fadeIn()
			$('.top .videovoice video')[0].pause()
			$('.top .videovoice video')[0].currentTime = 0
			$('.top .info').removeAttr('style')
			$('.top .videovoice').removeAttr('style')
		})
	}

	function noContextMenu(){
		let noContext = document.getElementById('noContext');
		console.log("test");
		noContext.addEventListener('contextmenu', e => {
  		e.preventDefault();
	});
	}

	$('.showreelvoice').click(showShowreelvoice)
	$('#hide-videovoice').click(hideShowreelvoice)
	noContextMenu()
});
