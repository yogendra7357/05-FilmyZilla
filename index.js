// Swiper Initialization
var homeSwiper = new Swiper(".home .mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});
let swiperSlide = new Swiper(".coming-container", {
    spaceBetween: 100,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        // 968: {
        //     slidesPerView: 5,
        // },
        // 1068: {
        //     slidesPerView: 6,
        // },
        // 1168: {
        //     slidesPerView: 7,
        // },
        // 1268: {
        //     slidesPerView: 8,
        // },
    },
});

// Header Shadow on Scroll
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("shadow", window.scrollY > 0);
});

// Navbar Toggle
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("show");
});


