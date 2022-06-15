// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron left solid.png"></img></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron right solid.png"></img></button>',
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                   dots: true,
//                   arrows: false
//                 }
//             }
//         ]
//     });
//   });

new WOW().init();

//Slider
const slider = tns({
	container: '.carousel__inner',
	slideBy: 'page',
	controls: false,
	nav: false,
	touch: true
});

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
  });
//Catalog tabs
  (function($) {
	$(function() {
	  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		  .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	  });
	});

	function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		})
	};

	toggleSlide ('.catalog-item__link');
	toggleSlide ('.catalog-item__back')

  //Modal
	$('[data-modal=consultation]').on('click', function(){
		$('.overlay, #consultation').fadeIn('fast');
	});
	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #thanks, #order').fadeOut('fast')
	});

	$('.button_mini').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('fast');
		})
	});

	//Validation
	function valideForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				  },
				phone: "required",
				email: {
					required: true,
					email: true
	
				}
			},
			messages: {
				name: {
					required: "Пожалуйста, введите своё имя",
					minlength: jQuery.validator.format("Введите минимум {0} символа")
				},
				phone: "Пожалуйста, введите номер телефона",
				email: {
				  required: "Пожалуйста, введите свою почту",
				  email: "Неправильно введен адрес почты"
				}
			  }
		});
	};

	valideForms('#consultation-form');
	valideForms('#consultation form');
	valideForms('#order form');

	//Masked input
	$('input[name=phone]').mask("+7 (999) 999-9999");

	$('form').submit(function(e) {
		e.preventDefault();

		if (!$(this).valid()) {
			return;
		}

		$.ajax({
			type: 'POST',
			url: 'mailer/smart.php',
			data: $(this).serialize()
		}).done(function() {
			$(this).find('input').val('');
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn('fast');
			$('form').trigger('reset');
		});
		return false;
	});

	//smooth scroll and pageup
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();

		} else {
			$('.pageup').fadeOut();
		}
	});
	// $("a[href^='#']").on('click', function(event) {

	// 	// Make sure this.hash has a value before overriding default behavior
	// 	if (this.hash !== "") {
	// 	  // Prevent default anchor click behavior
	// 	  event.preventDefault();
	
	// 	  // Store hash
	// 	  const hash = this.hash;
	
	// 	  // Using jQuery's animate() method to add smooth page scroll
	// 	  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	// 	  $('html, body').animate({
	// 		scrollTop: $(hash).offset().top
	// 	  }, 400, function(){
	
	// 		// Add hash (#) to URL when done scrolling (default click behavior)
	// 		window.location.hash = hash;
	// 	  });
	// 	} // End if
	//   });

	$('a[href="#up"]').click(function() {
		const _href = $(this).attr('href');
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});
  })(jQuery);
  
