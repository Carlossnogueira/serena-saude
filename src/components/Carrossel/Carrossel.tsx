import styles from "./Carrossel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import BannerOne from "../../assets/Images/Banner/BannerOne.png";
import BannerTwo from "../../assets/Images/Banner/BannerTwo.png";
import BannerThree from "../../assets/Images/Banner/BannerThree.png";

import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // <-- importar Autoplay

export function Carrosel() {
  const data = [
    { id: 1, image: BannerOne },
    { id: 2, image: BannerTwo },
    { id: 3, image: BannerThree },
  ];

  return (
    <div>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: false }}
        modules={[Navigation, Pagination, Autoplay]} 
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false, 
        }}
        loop={true} 
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              className={styles.swiperSlideImage}
              src={item.image}
              alt={`Banner ${item.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
