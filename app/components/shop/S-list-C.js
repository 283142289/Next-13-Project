/* 使用 Suspense  */
"use client"
import Image from 'next/image';

const SlistC =({Ldata})=>{   


    return(
        <div className='mt-10 bg-purple-300 bg-opacity-20'>
        <h2 className=' font-bold text-xl'>Recommended Products</h2>
    <div className='flex flex-wrap  justify-center items-center space-x-2 '>
        {Ldata && Ldata.map((item, index) => { 
        
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
{/*     <div ref={ref} className='w-full text-center' onClick={loadMore}> 
        {dend ? <p>数据已加载完 ~~</p> : <p>Load More ... </p>}
    </div> 
 */}    
 </div>
    )
}

export default SlistC;