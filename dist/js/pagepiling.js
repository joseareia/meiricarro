$(document).ready(function() {
    $('#pagepiling').pagepiling({
        menu: '#menu',
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: ['#efefef', '#fff', '#fff', '#fff', '#efefef', '#fff'],
        anchors: ['hero-section', 'about-us-section', 'services-section', 'contacts-section', 'map-section'],
        scrollingSpeed: 800,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
    });
});
