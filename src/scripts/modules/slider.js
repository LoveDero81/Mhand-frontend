export function slider(){
    new Swiper(".productGallerySlider", {
        pagination: {
          el: ".productGallerySlider .swiper-pagination",
        },
      });
}

new Swiper(".bannSlider", {
  slidesPerView: 1.7,
  spaceBetween: 21,
  navigation: {
    nextEl: ".advantages-section__info-block .button.next",
    prevEl: ".advantages-section__info-block .button.prev",
  },
});

new Swiper(".brandsSlider", {
  slidesPerView: 5,
  spaceBetween: 21,
  loop:true,
  navigation: {
    nextEl: ".brands-section__slider .button.next",
    prevEl: ".brands-section__slider .button.prev",
  },
});