import '@/globals.css'
/* 
import IG from '@/components/img';
import SwiperD from '@/components/swiper_D';
import T_menu from '@/components/T_menu';
 */
import dynamic from 'next/dynamic'

const IG = dynamic(() => import('./components/img'))
const SwiperD = dynamic(() => import('./components/swiper_D'))
const T_menu = dynamic(() => import('./components/T_menu'))


const HomePage = () => {
  
  //const Stor_data = useSelector((state) => state.counter.Tdata); 

  return (
<div style={{margin:"0 auto"}} className="w-[100vw] h-auto min-w-[360px] min-h-[640px] max-w-[1280px]  overflow-hidden scrollable-container 
sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl" >
        <div className="w-full h-auto relative">
            {/* 顶部导航栏   */}
            <T_menu />
            {/* Swiper 组件 */}
            <div className="w-full h-[40vh]  bg-orange-300 sm:h-[450px] md:h-[450px] lg:h-[450px] xl:h-[450px]  overflow-hidden">
              <SwiperD ></SwiperD>
            </div>
        </div>
        {/* 列表区域 */}
        <div className="w-full bg-black min-h-[100vh] text-white py-4">
            <IG />
        </div>
</div>
  );
};

export default HomePage;
