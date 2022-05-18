jQuery(document).ready(function(){

	function showGallery() {

		if (window.innerWidth > 769) {

			$('.top .description, .top .photo').fadeOut().promise().done(function() {

				$('.top .gallery').fadeIn()
			})
		} else {

			$('.top .gallery').fadeIn()
			$('html, body').animate({
				scrollTop: $('.top .gallery').offset().top - 20
			}, 1000)
		}
	}

	function hideGallery() {

		$('.top .gallery').fadeOut().promise().done(function() {

			$('.top .description, .top .photo').fadeIn()
			$('.top .description, .top .photo').css('display', null)
			$('.top .gallery').removeAttr('style')
		})
		if (window.innerWidth <= 769) {

			$('html, body').animate({scrollTop: 0}, 1000)
		}
	}

	function moveGalleryImage(step) {

		var index = $('.top .gallery .pictures img').index($('.top .gallery .pictures img.active'))
		var length = $('.top .gallery .pictures img').length
		var targetIndex = index + step

		if (targetIndex >= length) {

			targetIndex -= length
		}

		if (targetIndex < 0) {

			targetIndex += length
		}

		var images = $('.top .gallery .pictures img')

		$('.top .gallery .pictures img.active').removeClass('active')
		$(images[targetIndex]).addClass('active')

		var currentOffset = $(images[0]).position().left
		var neededOffset = $(images[targetIndex]).position().left
		$('.top .gallery .pictures').css('transform', 'translateX(' + (currentOffset - neededOffset) + 'px)')
	}

	$('.photos').click(showGallery)
	$('#hide-gallery').click(hideGallery)

	$('.top .gallery .controls .right').click(function() {

		moveGalleryImage(1)
	})

	$('.top .gallery .controls .left').click(function() {

		moveGalleryImage(-1)
	})

	$(window).resize(function() {

		if (window.innerWidth > 769 && $('.top .gallery').css('display') != "none") {

			$('.top .description, .top .photo').hide()
		} else {

			$('.top .description, .top .photo').show()
		}
	})
});
