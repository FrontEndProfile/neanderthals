var swiper = new Swiper(".storySlider", {
    loop: true,
    centeredSlides: true,   
     slidesPerView: 3,
     spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        300: {
          slidesPerView: 1.3,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 1.4,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1.8,
          spaceBetween: 40,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
  });

  var swiper = new Swiper(".image-Slider", {
    loop: true,
    centeredSlides: true,   
     slidesPerView: 2.7,
     loop:true,
     spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        576: {
          slidesPerView:1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2.2,
        },
        991: {  
          slidesPerView: 2.7,
          spaceBetween: 0,
        },
      },
  });