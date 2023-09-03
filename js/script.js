$(document).ready(() => {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    let typed = new Typed('.typed', {
        strings: ['Automation Tester', "Manual Tester", 'Paraglider Pilot'],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    $('.chart').easyPieChart({
        //your options goes here
    });
});