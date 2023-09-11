"use client"

import React,{useState,useEffect} from 'react';
import { gsap } from 'gsap';

import { BiMenu,BiHomeAlt,BiHomeSmile,BiSolidVideos,BiHeadphone,BiSolidStore} from 'react-icons/bi';
import dynamic from 'next/dynamic'

import Link from 'next/link';

//import Sidebar from '@/components/Sidebar'
const Sidebar = dynamic(() => import('../components/Sidebar'),{
  loading: () => <p>Loading...</p>,
})

function Side_bar() {
  const [show_btn,setShow_Btn]=useState(false)
  
    useEffect(() => {
      const elem = document.querySelector('.sidebar');
      if (show_btn) {
        gsap.to(elem, {
          opacity: 1,
          x:100,
          ease: 'power2.inOut',
          duration: 0.5
          
        });
      } 
      else {
        gsap.to(elem, {
          opacity: 0,
          x:-100,
          ease: 'power2.inOut',
          duration: 1
        });
      }

    }, [show_btn]);


    const Btn_show=(event)=>{
      if(event.target === event.currentTarget){
        event.stopPropagation();
        setShow_Btn(!show_btn)
      }
    }

    
    const Menu_shows=() => {
    setShow_Btn(!show_btn)
  }


    return (
      <div className='flex justify-center items-center'>
        <button aria-label="S-H"  onClick={Menu_shows}><BiMenu size={25} /></button>
        {show_btn && (
        <div onClick={Btn_show} className='sidebar opacity-0  w-[100vw] h-[100vh] fixed top-0 -left-[100px] bg-black bg-opacity-30'>
          <div className='transition-opacity duration-300 ease-in-out  absolute text-black top-0 left-0 w-60 h-screen bg-white flex justify-center'>
            <div className='absolute top-2 left-2 '><button onClick={()=>{setShow_Btn(!show_btn)}}><BiMenu size={25} /></button></div>
            <ul className='p-2'>
              <li className='p-2 my-3 flex justify-center items-center space-x-2 font-bold hover:bg-fuchsia-300'>
                <BiHomeAlt size={20}/><Link href="/">Home</Link></li>
               
                <Sidebar  />
                
            </ul>
          </div>
        </div>
        )}

      </div>
    )
  }

export default Side_bar;