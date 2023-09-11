"use client"
import Link from 'next/link';
import Image from 'next/image'

import { useSelector, useDispatch } from 'react-redux';
import { updateStor_data} from '../redux/reducer';
import { useState } from "react";


// eslint-disable-next-line react-hooks/rules-of-hooks



const L_Card =({Idata})=>{
  const dispatch = useDispatch(); 
  const Stor_data = useSelector((state) => state.counter.Stor_data); 
  const [loading, setLoading] = useState(true);

  return(
      <div className='flex flex-wrap justify-center items-center'>
      {
        Idata?.map((item, index) => (  
          // eslint-disable-next-line react/jsx-key
        <Link href={{
          pathname: '/detailed',
          query: {data:JSON.stringify(item)} 
          }}
          key={index}  
          onClick={()=>{
            dispatch(updateStor_data(item))
          }}
          className="scale-100 hover:scale-105"
          >
          {/* // eslint-disable-next-line react/jsx-key */}
          <div   className="w-80 h-[280px] rounded-t-2xl m-2 bg-black overflow-hidden  hover:text-orange-500 text-base ">
              <div className='relative rounded-t-2xl w-full h-4/6 '>
              <Image  
                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                className='w-full h-full '
                alt='BG'
                width={500}
                height={500}
                blurDataURL={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                placeholder="blur" // 模糊化处理原始图片
                //blurDataURL="./favicon.png" // 自定义模糊 placeholder 图片 
                onLoadingComplete={()=>{console.log('加载OK~')}} 
              />
              {/* <Image
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} 
                alt='TBG'
                  fill
                  className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                    loading
                      ? "scale-110 blur-2xl grayscale"
                      : "scale-100 blur-0 grayscale-0"
                  }}`}
                  onLoadingComplete={() => setLoading(false)}
                /> */}
              <div className=' absolute bottom-0 left-0  w-full h-10  bg-opacity-30 bg-black flex justify-center items-center'>
                <h3 className='text-center font-bold truncate transform hover:scale-200'>{item.title}</h3>
              </div>
            </div>
            <div className='w-full h-36  bg-opacity-30 bg-white p-1 mb-1 overflow-hidden' >
              <p className='text-left p-1 w-full line-clamp-3 leading-1.5'>{item.overview ? item.overview : "暂时无数据"}</p>
            </div>
          </div> 
         </Link> 
        ))
      }
    </div>
)}

export default L_Card;

