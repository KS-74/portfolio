var typed = new Typed("#typed_span", {
    strings: ["Pro-Gamer", "Developer In-Training", "FootBall Player"],
    typeSpeed: 55,
    loop: true
  });
  
  $(document).ready(function() {
    $(".owl-carousel").owlCarousel({
      loop: true,
      items: 1,
      rewind: true,
      nav: true,
      autoplay: true
    });
  });