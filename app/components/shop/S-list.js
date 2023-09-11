"use client"
import {useState,useEffect,useRef} from 'react'
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Slist =()=>{   

    const { ref, inView } = useInView();//滚动到就触发
    const [dat, SetDat ] = useState([]) //数据存放
    const DnumRef = useRef(1);// api/1
    const [dend, SetDend ] = useState(false) //判断数据是否加载完成

/* 触发api 加载数据 */
    const loadMore = async () => {
        if(!dend){
            console.log('loadMore')
            const res = await fetch('http://localhost:3010/api/dbs/'+DnumRef.current);
            const data = await res.json()
            if (data.length === 0) {
            console.log('数据已经到底了！~')    
            SetDend(true)
          }
            SetDat(prev => [...prev, ...data]);
            DnumRef.current = DnumRef.current + 1;
        }else{
            console.log('loadMore 数据已经加载完成！~')
        }
     
    };

    useEffect(() => {
        console.log('加载触发一次')
        loadMore();
      },[]);
    

  useEffect(() => {
    if(inView) {
      loadMore();
    }
  }, [inView]);


    return(
        <div className='mt-10 bg-purple-300 bg-opacity-20'>
        <h2 className=' font-bold text-xl'>Recommended Products</h2>
    <div className='flex flex-wrap  justify-center items-center space-x-2 '>
        {dat && dat.map((item, index) => { 
        
            return(
                // eslint-disable-next-line react/jsx-key
                <div className='w-[240px] h-[290px] rounded-xl my-4 p-2 shadow-xl border-2 border-gray-400 flex flex-col justify-center items-center'>
                   <div className='w-[200px] h-[200px] '>
                        <Image  
                        src={`https:${item.img}`}
                        /*src='https://img.ltwebstatic.com/images3_pi/2023/02/03/16754194581117864e562774f1e5e714a5b5704ef6_thumbnail_405x552.jpg'
                        */className='w-full h-full scale-100 hover:scale-105 rounded-xl'
                        alt={`bg${index}`}  
                        width={500}
                        height={500}
                        placeholder="blur"
                        blurDataURL="/loader.svg"
                        />
                    </div>
                    <div className='  w-full overflow-hidden py-2'>
                        <p className="w-full font-bold truncate text-[16px] text-start ">{item.title}</p>
                        
                        <p className='w-full text-start text-[14px] text-gray-400 '>{item.price}</p>
                       
                    </div>
                </div>
        )})}

    </div>
    {/* 滚动加载更多 */}
    <div ref={ref} className='w-full text-center' onClick={loadMore}> 
        {dend ? <p>数据已加载完 ~~</p> : <p>Load More ... </p>}
    </div> 
    </div>
    )
}

export default Slist;