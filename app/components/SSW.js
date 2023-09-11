import React, { useEffect,useRef, useState } from 'react';
// Import Swiper React components
import SwiperCore,{ Pagination, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([FreeMode, Pagination]);
//
import { useMediaQuery } from 'react-responsive';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function App() {
  const isBigScreen = useMediaQuery({ minWidth: 768 })
  return (
    <>
      <Swiper
          slidesPerView={isBigScreen ? 4 : 3}
          spaceBetween={5}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper w-full h-52 "
      >
        <SwiperSlide className="bg-blue-200 rounded-lg">Slide 1 </SwiperSlide>
        <SwiperSlide className="bg-blue-400 rounded-lg">Slide 1 </SwiperSlide>
        <SwiperSlide className="bg-blue-500 rounded-lg">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-blue-400 rounded-lg">Slide 5</SwiperSlide>
        <SwiperSlide className="bg-blue-500 rounded-lg">Slide 6</SwiperSlide>
      </Swiper>
    </>
  );
}
