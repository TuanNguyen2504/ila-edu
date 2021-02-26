$(document).ready(function () {
	// slide banner
	const slideBannerTimer = setInterval(() => {
		const currentVal = parseInt($('.banner-img').attr('data-value'));
		let nextVal = currentVal + 1;
		if (currentVal === 3) nextVal = 1;

		$('.banner-img')
			.addClass('ani-fade-in--slide')
			.one('webkitAnimationEnd', function () {
				$('.banner-img').removeClass('ani-fade-in--slide');
			});
		$('.banner-img').attr({
			src: `./images/header-bg-${nextVal}.jpg`,
			'data-value': nextVal,
		});
	}, 5000);

	// hover menu item -> show sub menu
	$('.menu-item')
		.mouseenter(function () {
			$('.sub-menu', this).addClass('hover');
		})
		.mouseleave(function () {
			$('.sub-menu').removeClass('hover');
		});

	// hover sub menu item -> show sub menu level 2
	$('.sub-menu-item')
		.mouseenter(function () {
			$('.sub-menu--lv2', this).addClass('hover');
		})
		.mouseleave(function () {
			$('.sub-menu--lv2', this).removeClass('hover');
		});

	// show, hide slide menu
	$('#slideMenuIcon').click(function (e) {
		$('.slide-menu').addClass('show');
	});

	$('#closeSlideMenu').click(function () {
		$('.slide-menu').removeClass('show');
	});

	// stick menu
	$('main').waypoint(
		function (direction) {
			if (direction === 'down') {
				$('header').addClass('sticky');
			} else {
				$('header').removeClass('sticky');
			}
		},
		{ offset: '0px' },
	);
});
