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
const slider = tns({
	container: '.carousel__inner',
	slideBy: 'page',
	controls: false,
	nav: false
});

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
  });