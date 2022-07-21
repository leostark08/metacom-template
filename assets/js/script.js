const partnerSwiper = new Swiper('.partner-swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 5,
        },
        // when window width is >=  1024px
        1024: {
            slidesPerView: 6,
        },
        // when window width is >= 1140px
        1140: {
            slidesPerView: 8,
        },
    },
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    speed: 5000,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
const projectSwiper = new Swiper('.project-swiper', {
    // Optional parameters
    spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        // when window width is >=  1024px
        1024: {
            slidesPerView: 4,
        },
    },
    slidesPerView: 'auto',
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});
$('.tab-link').click(function () {
    var tabID = $(this).attr('data-tab');
    $(this).addClass('active').siblings().removeClass('active');
    $('#tab-' + tabID)
        .addClass('active')
        .siblings()
        .removeClass('active');
});

const newsSwiper = new Swiper('.news-swiper', {
    // Optional parameters
    spaceBetween: 30,
    // autoplay: { disableOnInteraction: false },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        // when window width is >=  1024px
        1024: {
            slidesPerView: 3,
        },
    },
    slidesPerView: 'auto',
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
    // Navigation arrows
    navigation: {
        nextEl: '_',
        prevEl: '_',
    },
    pagination: {
        el: '.news-swiper-pagination',
        type: 'bullets',
    },
});
