// constants
const LEVEL_OPTIONS_0 = [
	{ value: 0, title: 'Chọn' },
	{ value: 1, title: 'Chưa biết' },
];
const LEVEL_OPTIONS_1 = [
	{ value: 0, title: 'Chọn' },
	{ value: 1, title: 'Chưa biết' },
	{ value: 2, title: 'Cấp độ 3' },
	{ value: 3, title: 'Câp độ 4' },
	{ value: 4, title: 'Cấp độ 5' },
	{ value: 5, title: 'Cấp độ 6' },
	{ value: 6, title: 'Cấp độ 7' },
	{ value: 7, title: 'Cấp độ 8' },
	{ value: 8, title: 'Cấp độ 9' },
	{ value: 9, title: 'Cấp độ 10' },
	{ value: 10, title: 'Cấp độ 11' },
	{ value: 11, title: 'Cấp độ 12' },
	{ value: 12, title: 'Cấp độ Pro' },
];
const LEVEL_OPTIONS_2 = [
	{ value: 0, title: 'Chọn' },
	{ value: 1, title: 'Chưa biết' },
	{ value: 2, title: '1A - Starter' },
	{ value: 3, title: '1B - Movers' },
	{ value: 4, title: '2A - Movers' },
	{ value: 5, title: '2B - Flyers' },
	{ value: 6, title: '3A - Flyers' },
	{ value: 7, title: '3B - KET' },
	{ value: 8, title: '4A - KET' },
	{ value: 9, title: '4B - PET' },
	{ value: 10, title: '5A - PET' },
	{ value: 11, title: '5B - PET' },
	{ value: 12, title: '5C - PET' },
	{ value: 13, title: '6A - FCE' },
	{ value: 14, title: '6B - FCE' },
];
const LEVEL_OPTIONS_3 = [
	...LEVEL_OPTIONS_2,
	{ value: 15, title: 'IELTS 2A - IELTS' },
	{ value: 16, title: '6C - IELTS' },
	{ value: 17, title: '7A - IELTS' },
	{ value: 18, title: '7B - IELTS' },
	{ value: 19, title: '7C - IELTS' },
];

// main
$(document).ready(function () {
	// ======== header ========= //
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

	// ========= search section ========= //
	// event: age, level select change
	$('#age').change(function () {
		const age = $('#age').val();
		if (age == '0') {
			// select option "Chọn"
			$('#level').attr('disabled', '');
			$('#dream').attr('disabled', '');
		} else {
			$('#age').removeClass('error');
			$('#level').removeAttr('disabled').removeClass('error');
			$('#dream').removeAttr('disabled');
		}

		$('#level').empty();
		$('#dream').empty();

		let list;
		switch (age) {
			case '0':
				list = LEVEL_OPTIONS_0;
				break;
			case '1':
				list = LEVEL_OPTIONS_1;
				break;
			case '2':
				list = LEVEL_OPTIONS_2;
				break;
			case '3':
				list = LEVEL_OPTIONS_3;
				break;
			default:
				LEVEL_OPTIONS_0;
				break;
		}
		let optionList = '';
		list.forEach((item, index) => {
			optionList += `<option value="${item.value}">${item.title}</option>`;
		});
		$('#level').append(optionList);
		$('#dream').append(optionList);
	});

	$('#level').change(function () {
		if ($(this).val() !== '0' && $(this).hasClass('error'))
			$(this).removeClass('error');
	});

	// section filter btn click
	$('#btnSubmit').click(function (e) {
		e.preventDefault();
		const age = $('#age').val();
		const level = $('#level').val();
		if (age == '0') $('#age').addClass('error');
		if (level == '0') $('#level').addClass('error');
	});

	// event scroll and add animate
	const programRow1 = $('#programRow1').offset().top;
	const programRow2 = $('#programRow2').offset().top;
	const programImg = $('#programImg').offset().top;
	const storySection = $('#storySection').offset().top;
	const whyChooseSection = $('#whyChooseSection').offset().top;
	const newSection = $('#newSection').offset().top;

	$(window).scroll(function () {
		const height = $(window).scrollTop();
		if (height >= programRow1 - 700) {
			$('#programRow1').addClass('scroll-animate');
		}
		if (height >= programRow2 - 700) {
			$('#programRow2').addClass('scroll-animate');
		}
		if (height >= programImg - 700) {
			$('#programImg').addClass('scroll-animate');
		}
		if (height >= storySection - 700) {
			$('#storySection').addClass('scroll-animate');
		}
		if (height >= whyChooseSection - 700) {
			$('#whyChooseTitle').addClass('scroll-animate');
			$('#whyChooseSubTil').addClass('scroll-animate');
			$('#whyChooseStas').addClass('scroll-animate');
		}
		if (height >= newSection - 700) {
			$('#newSection').addClass('scroll-animate');
		}
	});
});
