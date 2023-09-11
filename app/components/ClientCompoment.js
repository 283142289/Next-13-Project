'use client';
import {useEffect} from 'react'

function ClientComponent({data}) {
  useEffect(()=>{
    console.log('ClientComponent TEST CLI~',data)
  })
  

  return(
  <div>
    <p className='text-cyan-400'>标题：~~~ </p>
    {/* <p className='text-blue-600'>{JSON.stringify(data.products)}</p> */}
    {/* {data.products.map((item)=>(
      // eslint-disable-next-line react/jsx-key
      <h1 className=' bg-orange-200'>{item.title}</h1>
      
      ))} */}
      {data && data.products && 
  data.products.map((item,index) => (
    <><h1 key={index}>{item.title}</h1></>
  ))
}


  </div>
  )
}

export default ClientComponent;
