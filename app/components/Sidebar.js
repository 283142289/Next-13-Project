"use cilent "
import { BiHomeSmile,BiSolidVideos,BiHeadphone,BiSolidStore} from 'react-icons/bi';
import{AiOutlineSetting} from 'react-icons/ai'
import Link from 'next/link';

const Sidebar=()=>(
    <>
    
    <Link href='#' >
                        <div className='p-2 m-2  flex flex-col justify-center items-center hover:bg-red-300 rounded-xl'>
                        <BiHomeSmile size={25}/>
                        <span className='font-bold text-center text-[16px]'>Home</span>
                        </div>
                    </Link>
                    <Link href='#' >
                        <div className='p-2 m-2  flex flex-col justify-center items-center hover:bg-red-300 rounded-xl'>
                        <BiSolidVideos size={25}/>
                        <span className='font-bold text-center text-[16px]'>Video</span>
                        </div>
                    </Link>
                    <Link href='#' >
                        <div className='p-2 m-2  flex flex-col justify-center items-center hover:bg-red-300 rounded-xl'>
                        <BiHeadphone size={25}/>
                        <span className='font-bold text-center text-[16px]'>Music</span>
                        </div>
                    </Link>
                    <Link href='#' >
                        <div className='p-2 m-2  flex flex-col justify-center items-center hover:bg-red-300 rounded-xl'>
                        <BiSolidStore size={25}/>
                        <span className='font-bold text-center text-[1rem]'>Store</span>
                        </div>
                    </Link>

                    <Link href='#' >
                        <div className='p-2 m-2  flex flex-col justify-center items-center hover:bg-red-300 rounded-xl'>
                        <AiOutlineSetting size={25}/>
                        <span className='font-bold text-center text-[16px]'>Setting</span>
                        </div>
                    </Link>
    </>
)

export default Sidebar;