$(window).on('load', function () {
  $('.loader .inner').fadeOut(500, function () {
    $('.loader').fadeOut(750);
  });

  $('.items').isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false,
    }
  });
});

$(document).ready(() => {
  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false,
  });

  const typed = new Typed('.typed', {
    strings: ['Automation Tester', 'Manual Tester', 'WordPress Web Developer', 'Paraglider Pilot'],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 4,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      938: {
        items: 4,
      },
    },
  });

  let skillsTopOffset = $('.skillSection').offset().top;
  let statsTopOffset = $('.statsSection').offset().top;
  let countUpFinished = false;

  $(window).scroll(function () {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#e74c3c',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function (from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent));
        },
      });
    }

    if (
      !countUpFinished &&
      window.pageYOffset > statsTopOffset - $(window).height() + 200
    ) {
      $('.counter').each(function () {
        let element = $(this);
        let endVal = parseInt(element.text());

        element.countup(endVal);
      });

      countUpFinished = true;
    }
  });

  $('#filters a').click(function () {
    $('#filters .current').removeClass('current');
    $(this).addClass('current');

    const selector = $(this).attr('data-filter');

    $('.items').isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: 'linear',
        queue: false,
      },
    });

    return false;
  });

  function closeNavbar() {
    $('.navbar-collapse').collapse('hide');
  }

  $('#navigation li a').on('click', function(e) {
    e.preventDefault();
    closeNavbar();

    const targetElement = $(this).attr('href');
    const targetPosition = $(targetElement).offset().top;
    $('html, body').animate({ scrollTop: targetPosition - 50 }, 'slow');
  });

  const nav = $('#navigation');
  const navTop = nav.offset().top;

  $(window).on('scroll', stickyNavigation);

  function stickyNavigation() {
    const body = $('body');

    if ($(window).scrollTop() >= navTop) {
      body.css('padding-top', nav.outerHeight() + 'px');
      body.addClass('fixedNav');
    } else {
      body.css('padding-top', 0);
      body.removeClass('fixedNav');
    }
  }

});
