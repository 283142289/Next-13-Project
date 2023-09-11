"use client"
/* 顶部导航栏    组件 */
import React from 'react';
import Image from 'next/image';

function T_menu() {
    return (
        <div className=" bg-black  w-full h-[80px] md:bg-opacity-60 top-0 left-0 z-40" >
            <div className="w-full h-full px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-full">
                    <div className="flex m-2 justify-center items-center">
                    <div className="flex-shrink-0">
                        <Image className=" w-24 h-8" 
                        src="/netflix-logo.png" 
                        width={200} 
                        height={100}
                        alt="Logo"/>
                    </div>
                    <div className=" ml-4 hidden md:block">
                        <a href="#" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md  font-medium">My List</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md  font-medium">Movies</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md  font-medium">Tv Shows</a>

                    </div>
                    </div>
                    <div className="flex ">
                        <a href="#" className="hidden md:block text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md font-medium">Search</a>                
                        
                    </div>
                </div>
            </div>
        </div>



    );
}

export default T_menu;






