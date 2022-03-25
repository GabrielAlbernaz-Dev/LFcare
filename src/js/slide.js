export default function initSlides() {
    const slides = document.querySelectorAll(".swiper-slide")
    const swiper = new Swiper(".myGallery", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      const swiper2 = new Swiper(".myGallery2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });
}