$(window).on('load',()=>{
    $('#loader').fadeOut();
});

$(document).ready(function () {
    let year = new Date();
$('.cr').html('   Copyright <span class="fas fa-copyright"></span> ' + year.getFullYear() + ". Sadullayev Josh*");
$("#owl-bottle").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    autoplay: true,
    navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplaySpeed: 800,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',

    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        767: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 3
        },
        1600: {
            items: 3
        }
    }
});
});
