$(document).ready(function(){
  var lhswiper = new Swiper("#lh-slide", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".lh-next",
          prevEl: ".lh-prev",
        },
        autoplay: true,
        spaceBetween:10,
        slidesPerView:1,
        on: {
          slideChangeTransitionStart: function () {
            var active = lhswiper.activeIndex + 1;
            $('.landing-text').removeClass('active');
            $('#lt-'+active).addClass('active');
          }
        }
  });

  var clientswiper = new Swiper('#client-slide',{
      autoplay: true,
      loop: true,
      speed:100,
      slidesPerView: 'auto',
      spaceBetween:20
  })
});