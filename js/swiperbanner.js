var swiper = new Swiper(".myBanner", {
    loop: true,
    autoplay: {
      delay: 6000,
    },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".myDiscount", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
  
    540: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },

});

var swiper = new Swiper(".myStory", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
  
    540: {
      slidesPerView: 2.5,  
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 3.5, 
      spaceBetween: 30,
    },
  },
  
});
