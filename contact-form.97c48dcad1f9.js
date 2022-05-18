jQuery(document).ready(function(){

	function showContactForm() {

		if (window.innerWidth > 769) {

			$('.top .info').fadeOut().promise().done(function() {

				$('.top #contact-form').fadeIn().css("display", "flex")
			})
		} else {

			$('.top #contact-form').fadeIn().css("display", "flex")
		}
	}

	function hideContactForm() {

		$('.top #contact-form').fadeOut().promise().done(function() {

			$('.top .info').fadeIn()
			$('.top .info').removeAttr('style')
			$('.top #contact-form').removeAttr('style')
		})
	}

	$('.agent').click(showContactForm)
	$('.contact').click(function() {

		$('html, body').animate({scrollTop: 0}, 1000)
		showContactForm()
	})

	$('.top #hide-contact').click(hideContactForm)

	$(window).resize(function() {

		if (window.innerWidth > 769 && ($('.top .video').css('display') != "none" || $('.top #contact-form').css('display') != "none")) {

			$('.top .info').hide()
		} else {

			$('.top .info').show()
		}
	})
});
