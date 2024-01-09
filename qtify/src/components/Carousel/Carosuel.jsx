import React, { useEffect } from 'react';
import styles from './Carousel.module.css';
import {Swiper} from 'swiper/react';
import { SwiperSlide, useSwiper } from 'swiper/react';
import CarouselNavigationRight from './CarouselNavigationRight';
import CarouselNavigationLeft from './CarosuelNavigationLeft';
import "swiper/css";

const Carousel = ({ data, componentRender }) => {
  const Controls = ({ data }) => {
    const swiper = useSwiper(data, componentRender);
    useEffect(() => {
      swiper.slideTo(0,null);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
   
  };
  return (
  <div className={styles.wrapper}>
    <Swiper
     style={{ padding: "0px, 20px" }}
     initialSlide={0}
    //  module={{Navigaton}}
     slidesPerView={"auto"}
     spaceBetween={40}
     allowTouchMove
    >
      <Controls data={data} />
      <CarouselNavigationRight />
      <CarouselNavigationLeft />
      {data.map((item) => (
      <SwiperSlide key={item.id}>{componentRender(item)}</SwiperSlide>
      ))}
    </Swiper>
  </div>
);
};

export default Carousel;



