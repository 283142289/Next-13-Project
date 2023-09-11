/* import React, { useState } from 'react';
import {Swiper} from 'swiper/react';
import 'swiper/css';

const App = () => {
  const [slides, setSlides] = useState([
    {
      src: 'https://i.pinimg.com/236x/f5/60/16/f5601618afcb9e400d0be9c914f5f9f6.jpg',
      alt: 'Slide 1',
    },
    {
      src: 'https://i.pinimg.com/564x/d3/46/bf/d346bf34cde4a2ff71d62d95d88139a8.jpg',
      alt: 'Slide 2',
    },
    {
      src: 'https://i.pinimg.com/236x/61/af/4b/61af4b754fbad8bd16435badbe9d4d1f.jpg',
      alt: 'Slide 3',
    },
  ]);

  return (
    <Swiper
      slides={slides}
      spaceBetween={30}
      loop={true}
      autoplay={true}
      dots={false}
      arrows={false}
    >
      {slides.map((slide, index) => (
        <div key={index} className="swiper-slide">
          <img src={slide.src} alt={slide.alt} />
        </div>
      ))}
    </Swiper>
  );
};

export default App; */



// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const B=() => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={(swiper) =>  console.log(swiper.activeIndex)}
    >
        <SwiperSlide >
          <img src="https://i.pinimg.com/236x/61/af/4b/61af4b754fbad8bd16435badbe9d4d1f.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/236x/f5/60/16/f5601618afcb9e400d0be9c914f5f9f6.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.pinimg.com/236x/f5/60/16/f5601618afcb9e400d0be9c914f5f9f6.jpg"/>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://i.pinimg.com/236x/f5/60/16/f5601618afcb9e400d0be9c914f5f9f6.jpg"/>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://i.pinimg.com/236x/61/af/4b/61af4b754fbad8bd16435badbe9d4d1f.jpg"/>
        </SwiperSlide>
    </Swiper>
  );
};
export default B;