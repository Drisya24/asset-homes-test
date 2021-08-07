$(function () {
    
    $('.owl-carousel').owlCarousel({
        // loop: true,
        // margin: 10,
        nav: true,
        items: 3,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        },
        stagePadding: 50,
        navElement: "<div></div>"
    });
});
