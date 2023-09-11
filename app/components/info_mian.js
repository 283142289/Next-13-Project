//info_main.js

"use client"
import React,{useState,useRef} from 'react';
import Image from 'next/image'
import {BiLike} from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import SSW from './SSW'

const MainCom=()=>{
    //const [isOpen, setIsOpen] = useState(false)
    const [isloging, setIsloging] = useState(false)

    /* eslint-disable react-hooks/rules-of-hooks */

    const Stor_data = useSelector((state) => state.counter.Stor_data);
    //return { videoRef, Stor_data };
    const avas=['John deep','Coco','IenLi','Kiki']
return(
 <>
 {/*  video play */}
     <div className="w-full h-72 bg-black relative">
            {isloging ? 
            <>
            </>  : 
            <>
                          <div className=' bg-blue-500 rounded-xl w-full h-full absolute left-0 top-0'></div>

            </>}
             <Image 
             className='w-full h-full'
             src={`https://image.tmdb.org/t/p/original/${Stor_data.backdrop_path}`}   
             width={300}
             height={200}          
             alt='DImg'
             //loading="eager" // 立即加载原始图片
             placeholder="blur" // 模糊化处理原始图片
             blurDataURL="https://via.placeholder.com/300x200" // 自定义模糊 placeholder 图片 
             onLoadingComplete={()=>{
              setIsloging(!isloging);
              console.log('加载OK~',isloging)}}
             />            

         </div>
         {/* 介绍 */}
         <div>
             <div className="w-full h-auto  bg-black relative px-2   ">
               <div className="flex justify-between items-center">
                 <h1 className=" text-xl font-bold ">{Stor_data.title}</h1>
                 <BiLike size={30} color="white" />
               </div>
               <div className="flex justify-between items-center">
                 <span className='text-xs font-bold'>{Stor_data.release_date}</span>
                 <div className="flex">
                     <span className="text-xl font-bold text-yellow-500">{Stor_data.vote_average}</span>
                     <div className="flex items-center ml-2">
                         <svg className="w-3 h-3 fill-current text-yellow-500" viewBox="0 0 24 24">
                         <path d="M12 15.6l-6.6 4 2.5-7.7L3.4 9.6l7.8-.1L12 2l2.8 6.5 7.8.1-5.6 4.1 2.5 7.7z"></path>
                         </svg>
                     </div>
                 </div>
               </div>
             </div> 
             {/* cast */}
             <div className=" space-y-2 p-2">
                <div className="flex justify-between items-center">
                     <h3>Cast</h3> 
                     <span>See all</span>
                </div>
                <div className='w-full h-24 mt-2 flex space-x-4 space-y-2  justify-start items-center'>
                  {avas.map((item,index)=>{
                    return(
                     // eslint-disable-next-line react/jsx-key
                     <div key={index} className=" w-1/4 h-20 flex flex-col justify-center items-center">
                         <img className='w-20 h-20 rounded-full'  name='Kola Tioluwani' src="https://bit.ly/code-beast" alt='IMG'/>
                         <span className='text-xs text-center'>{item}</span>                            
                     </div>
                     )
                  })}
 
                  
                </div>
             </div>
             {/*  */}
             <div className="p-2 space-y-2 my-4">
                 <button className="w-full bg-white hover:bg-orange-600 text-black font-bold py-2 px-4 rounded">
                     PLAY
                 </button>
                 <button className=" w-full bg-slate-600 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                     Download SSS
                 </button>
             </div>  
             {/*  */}
             <h5 className=' font-bold my-2'> 推荐影视</h5>
             <SSW />
           </div>
 </>
)
}

export default MainCom;










/* 

    const toggleOpen = () => {
      setIsOpen(!isOpen)
    }
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const videoRef = useRef(null);
    
      const handlePlay = () => {
        videoRef.current.play();
      };
    
      const handlePause = () => {
        videoRef.current.pause();
      };



             {/* <video
               ref={videoRef} 
               className="w-full h-64"
               src="/pex.mp4"
               controls
               preload="metadata"
             />
            <div className="mt-4">
               <button className="mr-4" onClick={handlePlay}>
                 播放
               </button>
               <button onClick={handlePause}>暂停</button>
             </div> 
*/