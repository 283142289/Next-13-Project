// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs ,Autoplay} from "swiper";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="relative w-screen h-screen">
      <Swiper 
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={{ prevEl: null, nextEl: null }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs,Autoplay]}
        autoplay={{ delay: 8000 }} // 设置自动播放的延迟时间
        className="mySwiper2 w-screen h-screen"
      >
        <SwiperSlide className="w-full h-full">
          <img className="w-full h-full" src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full" src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full" src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full" src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full" src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
      </Swiper>
    {/*  底部 预览 */}
      <div className=" absolute bottom-0 left-0 z-50 w-full h-48">
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        navigation={true}
        className="mySwiper w-11/12"
      >
        <SwiperSlide className="w-48 h-48">
          <img className="w-full h-48" src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className="w-48 h-48">
          <img className=" w-full h-48" src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide className="w-48 h-48">
          <img className="w-full h-48" src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide className="w-48 h-48">
          <img className="w-full h-48" src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide className="w-48 h-48">
          <img className="w-full h-48" src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}
