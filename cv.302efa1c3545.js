jQuery(document).ready(function(){

	$('.cv-title').click(function(e) {

		$('.cv-title.active').removeClass('active')
		$(e.target).addClass('active')

		$('.cv-body.active').removeClass('active')
		$('.cv-body').eq($(e.target).attr('data-index')).addClass('active')
		resizeTableHeaders()
	})

	setTimeout(function() {

		$('table.initial').removeClass('initial')
	}, 4000)

	function resizeTableHeaders() {

		$('.cv-body.active thead.sticky th').each(function(index) {

			var tdWidth = $('.cv-body.active thead:not(.sticky) th').eq(index).width()
			$(this).width(tdWidth)
		})

		$('.cv-body.active thead.sticky').width($('.cv-body.active thead:not(.sticky)').width())
	}

	resizeTableHeaders()

	$(document).bind('TypekitLoaded', function() {

		setTimeout(function() {
			resizeTableHeaders()
		}, 10)
	})

	$(window).resize(function() {

		resizeTableHeaders()
	})

	$(window).scroll(function() {

		if ($(window)[0].scrollY >= $('table.cv-body.active').offset().top) {

			var height = $('.cv-body.active thead').height()
			$('.cv-body.active thead.sticky').addClass('stuck')

			if ($(window)[0].scrollY >= ($('table.cv-body.active').offset().top + $('table.cv-body.active').height() - height)) {

				var offset = $(window)[0].scrollY - ($('table.cv-body.active').offset().top + $('table.cv-body.active').height() - height)
				$('.cv-body.active thead.sticky').css("top", -offset + "px")
			} else {

				$('.cv-body.active thead.sticky').css("top", 0 + "px")
			}
		} else {

			$('thead.stuck').removeClass('stuck')
		}
	})
});
