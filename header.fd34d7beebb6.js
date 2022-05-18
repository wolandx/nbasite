jQuery(document).ready(function(){

	var menuIsVisible = false
	$('header .menu-button').click(function() {

		if (window.innerWidth < 1056) {

			showMenu()
		}
	});

	$('header .close').click(function() {

		if (window.innerWidth < 1056) {

			hideMenu()
		}
	});

	function showMenu() {

		$('#home .slider, #home .agents, .pop-up').fadeOut().promise().done(function() {

			$('.pop-up').removeAttr('style')
			$('header .nav ul').fadeIn().css('display', 'flex')
		})
		menuIsVisible = true
	}

	function hideMenu() {

		$('#home .slider, #home .agents, #home .agents h3').fadeIn()
		$('header .nav ul').fadeOut().promise().done(function() {

			$('header .nav ul').removeAttr('style')
		})
		menuIsVisible = false
	}

	$(window).resize(function() {

		if (window.innerWidth >= 1056 && menuIsVisible && $('header .search-form').css('display') == "none") {

			menuIsVisible = false
			$('#home .slider, #home .agents, #home .agents h3').fadeIn()
			$('header .nav ul').removeAttr('style')
		}
	})
});
