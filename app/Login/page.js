import LoginPage from '@/components/Login'
import Head from 'next/head'

const Logins = () => {
    return(
        <>
      
        <div className="min-w-[320px] w-[100vw] h-screen flex justify-center items-center  bg-gradient-to-r from-[#22A699] via-[#F2BE22] to-[#F24C3D]">
            <div className="shadow-2xl w-full md:w-[75vw] h-[80vh] rounded-2xl overflow-hidden flex bg-white bg-opacity-40">
            {/* 动画 */}
         {/*    <div className='w-full md:w-1/2 hidden md:block border-r-2 border-black bg-black md:flex justify-center items-center h-full overflow-hidden relative'>
                <img src="/cat.gif" className='absolute w-[12vh] h-[20vh] object-cover'/>
            </div> */}

            <div className='w-full flex justify-center items-center'>
                <LoginPage></LoginPage>
            </div>
    
            </div>    
      </div>
      </>
     
    )
}


export default Logins; 