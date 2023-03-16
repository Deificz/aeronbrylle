var swiper = new Swiper('.social-content', {
    
  effect: 'coverflow',
  grabCursor: true,
  slidesPerView: 4,
  centeredSlide: true,
  centeredSlidesBounds: true,
  loopFillGroupWithBlank: true,
  navigation: { 
    nextEl: '.swiper-button-next', 
    prevEl: '.swiper-button-prev' 
  },
  
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  320: {
    slidesPerView: 2,
    spaceBetween: 1
  },
  1280: {
    slidesPerView: 4,
    spaceBetween: 10
  },
  });

  var swiper = new Swiper('.work-content', {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      loop: true,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 10
        },}
  });