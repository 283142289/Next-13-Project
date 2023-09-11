
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic'
import Image from 'next/image';
import Link from 'next/link';

import SlistC from '@/components/shop/S-list-C'

const FotbarComponent = dynamic(() => import('../components/FooterBar'),{
    loading: () => <p>Loading...</p>,
  })

  const getIsrData = async () => {
    try{
        const res = await fetch('http://localhost:3000/api/db',
        {
            next:{
                revalidate:60
            }
        });
        return res.json();
    }catch(err){
       console.log('Error==>',err)
       return null;
    }
   
  };


const Shop = async () => {
    const imagePaths = [];
    //const ListPaths = [];
    const data = await getIsrData();
    console.log('Shopdata==》',data.data)
    for (let i = 1; i <= 6; i++) {
      imagePaths.push(`/temporary/p${i}.png`);
    }
    /* for (let i = 1; i <= 12; i++) {
      ListPaths.push(`${process.env.PUBLIC_IMAGE_URL}/p${i}.png`);
    } */
  
    return (
        <div className=' max-w-[1280px] min-w-[320px] mx-auto px-2'>
            {/* TOP */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto m-2">
                <Link href='#'>
                    <div className="h-[300px]  rounded-xl overflow-hidden relative">
                            <Image  
                            src='/temporary/m1.png'
                            className='w-full h-full object-cover object-center scale-100 hover:scale-105'
                            alt='BG'
                            loading='lazy'
                            placeholder="blur"
                            blurDataURL="/T1.pngs.blur"
                            width={500}
                            height={500}
                            blur={20}
                            />
                        <div className="absolute left-0 bottom-2 text-white space-y-2 px-2">
                            <h3 className='text-white font-bold text-xl'>Casual Sneakers</h3>
                            <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolorum officia autem libero!</p>
                            <button className=' bg-cyan-400 rounded-xl px-4 py-3 font-bold'>Shop Now</button>
                        </div>  
                    </div>  
                </Link>
                <Link href='#'>
                    <div className="h-[300px] rounded-xl overflow-hidden relative">
                        <Image  
                        src='/temporary/m3.png'
                        className='w-full h-full object-cover object-center scale-100 hover:scale-105'
                        alt='BG'    
                        width={500}
                        height={500}
                        blur={50}
                        />
                        <div className="absolute left-0 bottom-2 text-white space-y-2 px-2">
                            <h3 className='text-white font-bold text-xl'>Casual Sneakers</h3>
                            <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolorum officia autem libero!</p>
                            <button className=' bg-cyan-500 rounded-xl px-4 py-3 font-bold'>Shop Now</button>
                        </div>
                    </div>
                </Link>
            </div> 

        {/* Mid */}
        <div className="mt-5">
            <h2 className=' font-bold mt-2 text-xl'>Countdown Sale</h2>
            <div className="w-full h-auto my-2 xl:flex  justify-center items-center border-gray-400 border-2 rounded-lg shadow-md overflow-hidden">
                <div className='w-full h-[220px] xl:w-[320px]  flex justify-center items-center '>
                    <Image  
                        src='/images/offer-bg-2.png'
                        className='w-[320px]  h-[220px] '
                        alt='BG'    
                        width={500}
                        height={500}
                        
                        />

                </div>
                <div className='w-full h-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6'>
                    {imagePaths.map((path, index) => {
                        return(
                            // eslint-disable-next-line react/jsx-key
                            <div className='  shadow-md flex flex-col justify-center items-center space-y-1 p-2'>
                                <div className='w-[140px] h-[140px] '>
                                    <Image  
                                    src={path}
                                    className='w-full h-full scale-100 hover:scale-105'
                                    alt={`bg${index}`}  
                                    width={500}
                                    height={500}/>
                                </div>
                                <strong >Name{index}</strong>
                                <span className=' bg-cyan-100 rounded-3xl px-2 text-cyan-500'>-25%</span>
                            </div>
                    )})} 
                </div>
            </div>   
            </div>   

            {/* List item */}
                <Suspense>
                    <SlistC Ldata={data.data}></SlistC>
                </Suspense>
             {/*  */}
                <footer>
                       {/* <Fotbar></Fotbar>  */}
                      <FotbarComponent></FotbarComponent>
                </footer>     
               
        </div>
    );
  };
  

export default Shop;

