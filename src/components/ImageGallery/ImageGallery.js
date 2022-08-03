import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/autoplay";
import "./ImageGallery-swiper.css";

import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import classes from "./ImageGallery.module.css";

function ImageGallery(props) {
  const slides = props.imgs.map((img, index) => (
    <SwiperSlide key={index}>
      <img src={img.img} alt={img.altText} style={props.imageStyle} />
    </SwiperSlide>
  ));
  return (
    <div className={classes.imageGallery}>
      <Swiper
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {slides}
        {/* Use self-defined icons for nav buttons in Swiper */}
        <RightArrowIcon className="swiper-button-next" />
        <LeftArrowIcon className="swiper-button-prev" />
      </Swiper>
    </div>
  );
}

export default ImageGallery;
