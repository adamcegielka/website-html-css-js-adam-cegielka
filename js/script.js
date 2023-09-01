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
});