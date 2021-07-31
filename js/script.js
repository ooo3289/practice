window.onload = function(){
    var swiper = new Swiper(".main_slide", {
        loop: true,
        slidesPerView: 1.8,
        speed:4000,
        // autoplay: {
        //   delay: 0,
        //   disableOnInteraction: false,
        // },
        spaceBetween:30,
        centeredSlides:true,
        navigation: {
          nextEl: ".main_slide .arr_next",
          prevEl: ".main_slide .arr_prev",
        },
      });
}