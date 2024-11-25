import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
export function Slider() {
  new Swiper(".productGallerySlider", {
    modules: [Pagination],
    pagination: {
      el: ".productGallerySlider .swiper-pagination",
    },
  });
}

export function BannSlider() {
  new Swiper(".bannSlider", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 21,
    loop: true,
    navigation: {
      nextEl: ".advantages-section__info-block .button.next",
      prevEl: ".advantages-section__info-block .button.prev",
    },
    breakpoints:{
      769:{
        slidesPerView: 1.7,
        spaceBetween: 21,
      }
    }
  });
}

export function BrandsSlider() {
  new Swiper(".brandsSlider", {
    modules: [Navigation],
    slidesPerView: 5,
    spaceBetween: 21,
    loop: true,
    navigation: {
      nextEl: ".brands-section__slider .button.next",
      prevEl: ".brands-section__slider .button.prev",
    },
  });
}
