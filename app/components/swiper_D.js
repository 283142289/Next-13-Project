"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import Image from 'next/image'

import SwiperCore, { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper';
SwiperCore.use([FreeMode, Navigation, Thumbs, Autoplay]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function App() {
    const images = [
        "/HD/1.webp",
        "/HD/2.webp",
        "/HD/3.webp",
        "/HD/4.webp",      
      ];

      
  return (

      <Swiper  
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
      pagination={true} modules={[Pagination]} autoplay={{ delay: 20000 }} className="mySwiper h-full" >
            {images.map((image, index) => (
            <SwiperSlide key={index} className=" w-full  relative">
              {/*   <div className="text-white absolute left-0 top-0 w-screen h-full justify-center items-center  bg-slate-950 bg-opacity-20 hover:bg-opacity-0">
                      <p >Test</p>
                </div> */}
              {/*   <Image
                className="w-full h-full " 
                src={image} 
                alt={`Slide ${index}`} 
                loading="lazy"
                fallbacksrc='https://via.placeholder.com/150'
                /> */}
                <Image 
                  src={image}
                  alt="BG-Img" 
                /*   width={480}
                  height={320}
                  className="w-[100%]" */
                  fill
                  style={{objectFit:"cover"}}
                            />

            </SwiperSlide>
            ))}
      </Swiper>
  );
}
