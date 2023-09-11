"use client"
import Link from 'next/link';
import { AiFillCodepenCircle,AiOutlineInstagram ,AiFillRedditCircle} from 'react-icons/ai';
import { BiLogoTwitter,BiLogoFacebookCircle } from 'react-icons/bi';

const Footerbar = ()=>{
    const A = ['Find Store','Locations','Blogs & News','Affiliate Service']
    const S = ['Merchant support','Help center','Hire an Expert','Shopify Community','Shopify Events']
    const P = [
        "Shop",
        "Shop Pay",
        "Shopify Plus",
        "Shopify Fulfillment Network",
        "Linkpop",
        "Commerce Components"
      ];
    const C = [
        "john@doe.com",
        "0123456789",
        "213 Lane, London, United Kingdom"
      ];


    return(
        <>
            <div className='flex bg-yellow-100 h-auto relative pb-[10px]'>
                <div className="w-[380px] h-auto p-2">
                    <strong className='flex justify-center items-center m-4'><AiFillCodepenCircle size={30}/>Basket</strong>
                    <p className='py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
                    <div className='flex justify-between items-center my-4'>
                        <AiOutlineInstagram size={26}></AiOutlineInstagram>
                        <BiLogoFacebookCircle size={26}/>
                        <BiLogoTwitter size={26}></BiLogoTwitter>
                        <AiFillRedditCircle size={26}></AiFillRedditCircle>
                    </div>
                
                </div>
                <div className="w-full flex flex-wrap h-auto justify-start items-start p-5 ml-2" >
                    <div className='w-[180px] h-auto'>
                        <strong>About Us</strong>
                        <ul className='mt-5'>
                            {A.map((data,index)=>{
                                return(
                                    // eslint-disable-next-line react/jsx-key
                                    <li key={index} className='my-3'><Link href='#'>{data}</Link></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='w-[180px] h-auto'>
                        <strong>Support</strong>
                        <ul className='mt-5'>
                            {S.map((data,index)=>{
                                return(
                                    // eslint-disable-next-line react/jsx-key
                                    <li key={index} className='my-3'><Link href='#'>{data}</Link></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='w-[180px] h-auto'>
                        <strong>Products</strong>
                        <ul className='mt-5'>
                            {P.map((data,index)=>{
                                return(
                                    // eslint-disable-next-line react/jsx-key
                                    <li key={index} className='my-3'><Link href='#'>{data}</Link></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='w-[180px] h-auto'>
                        <strong>Contact Us</strong>
                        <ul className='mt-5'>
                            {C.map((data,index)=>{
                                return(
                                    // eslint-disable-next-line react/jsx-key
                                    <li key={index} className='my-3'><Link href='#'>{data}</Link></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='w-[180px] h-auto'>
                        <strong>Contact Us</strong>
                        <ul className='mt-5'>
                            {C.map((data,index)=>{
                                return(
                                    // eslint-disable-next-line react/jsx-key
                                    <li key={index} className='my-3'><Link href='#'>{data}</Link></li>
                                )
                            })}
                        </ul>
                    </div>
                   
                </div>
               
            </div>
            <div className='w-full border-t '>
                    <div className='flex justify-between items-center p-5'>
                        <p>© 2023 Basket</p>
                        <div>
                            <Link href="#"><span>Terms & Conditions</span></Link>
                            <Link href="#"><span>Privacy Policy</span></Link>

                        </div>
                    </div>
                </div>
        </>
    )
}

export default Footerbar;