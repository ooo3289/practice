window.onload = function(){
    var swiper = new Swiper(".main_slide", {
        loop: true,
        navigation: {
          nextEl: ".main_slide .arr_next",
          prevEl: ".main_slide .arr_prev",
        },
      });
}