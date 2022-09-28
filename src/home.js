$( document ).ready(function() {

	const imageSwiper = new Swiper('.featured-work_images', {
	// Optional parameters
	effect: 'cards',
	cardsEffect: {
	  //rotate: false
		 },
  });
  
  const textSwiper = new Swiper('.featured-work_text', {
	// Optional parameters
	effect: 'fade',
	initialSlide: 3,
	rewind: true,
	slidesPerView:1,
	autoHeight: true,
	navigation: {
		nextEl: '#next',
	  prevEl: '#back'
	  },
		controller: {
		control: imageSwiper,
	  },
	allowTouchMove: false
  });
  
  
  imageSwiper.on('touchEnd', function () {
		 textSwiper.slideToLoop(imageSwiper.realIndex);
	});
});