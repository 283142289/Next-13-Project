
import '@/globals.css'
/* 
import IG from '@/components/img';
import T_menu from '@/components/T_menu';
import Side_Menu from '@/components/Side_Menu';
import Sidebar from '@/components/Sidebar';
 */


import dynamic from 'next/dynamic'

const T_menu = dynamic(() => import('../components/T_menu'),{
    loading: () => <p>Loading...</p>,
  })
const Side_Menu = dynamic(() => import('../components/Side_Menu'),{
    loading: () => <p>Loading...</p>,
  })
const Sidebar = dynamic(() => import('../components/Sidebar'),{
    loading: () => <p>Loading...</p>,
  })
const IG = dynamic(() => import('../components/img'),{
    loading: () => <p>Loading...</p>,
  })



import Image from 'next/image';

const HomePage = () => {

    return (
        <div className='w-[100vw] flex justify-center items-center'>
            {/* Side bar*/}
            <div className=' hidden md:block w-[6vw] h-[100vh] z-50 fixed left-0 top-0 bg-white'>
                <Side_Menu></Side_Menu>
                <Sidebar/>
            </div>
      
            {/* main */}
            <div className='w-[94vw] h-auto px-5 ml-[6vw] bg-black'>
                {/* Head */}
                <div className='w-full h-[80px] mb-5 flex justify-center items-center z-30'>
                    <T_menu></T_menu>
                </div>
                {/* Swiper */}
                <div className='w-full h-[400px] rounded-2xl overflow-hidden border-2 my-5 border-white flex justify-center items-center'>
                    {/* <SwiperD></SwiperD> */}
                    <Image
                    src='/HD/hb.png'
                    width={600}
                    height={400}
                    quality={75}
                    className='w-full h-[100%]' 
                    alt='HB'
                    />
                   {/*  <div class="grid grid-cols-2 gap-4">
                        <div class="bg-gray-300 p-4 rounded-xl">Column 1</div>
                        <div class="bg-gray-300 p-4 rounded-xl">Column 2</div>
                    </div> */}
                </div>
                {/* List */}
                <div className='w-full h-auto'>
                    <div className="w-full bg-black min-h-[100vh] text-white py-4">
                        <IG />
                    </div>
                </div>
            </div>

        </div>
    );
  };
  

/* 
const HomePage = () => {

  return (
<div style={{margin:"0 auto"}} className="w-[100vw] h-auto min-w-[360px] min-h-[640px] max-w-[1280px]  overflow-hidden scrollable-container 
sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl" >
        <div className="w-full h-auto relative">
            <T_menu />
            <div className="w-full h-[40vh]  bg-orange-300 sm:h-[450px] md:h-[450px] lg:h-[450px] xl:h-[450px]  overflow-hidden">
              <SwiperD ></SwiperD>
            </div>
        </div>
        <div className="w-full bg-black min-h-[100vh] text-white py-4">
            <IG />
        </div>
</div>
  );
};
 */
export default HomePage;
