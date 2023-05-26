const observer = new IntersectionObserver(entries => {
    console.log(entries)

    Array.from(entries).forEach(entry => {
        if(entry.intersectionRatio >= 1) {
          entry.target.classList.add('init-hidden-off')
        }
    })
  }, {
    threshold: [0, .2, 1]
  })

  Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
    observer.observe(element)
  })

$(document).ready(function() {
  var owl = $('.owl-carousel');

  owl.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  $('.next-button').click(function() {
    owl.trigger('next.owl.carousel');
  });

  $('.prev-button').click(function() {
    owl.trigger('prev.owl.carousel');
  });
});