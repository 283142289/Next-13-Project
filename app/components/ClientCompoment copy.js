'use client';
import axios from 'axios';
import useSWR from 'swr' 
import {useEffect} from 'react'

function ClientComponent() {
  /* const { data, error } = useSWR('https://jsonplaceholder.typicode.com/todos/1', fetch)
  console.log('data~~~',data)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div> */
  useEffect(()=>{
    console.log('ClientComponent TEST CLI~',data)
  })
  
const fetcher = url => axios.get(url).then(res => res.data);

  const { data, error } = useSWR(`http://localhost:3000/api/wed`, fetcher);

    //const { data, error } = useSWR('https://dummyjson.com/products/2',fetcher)
  console.log('data~~~',data)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>


  return(
  <div>
    Hello {JSON.stringify(data.data)}
    {/* {data.map} */}
    <div>
  
    {data.data.map(todo => (
      <div key={todo.id}>{todo.title}</div> 
    ))}
  
    <p className='text-cyan-400'>标题：~~~ </p>
    <button onClick={()=>{console.log('CLI CLICK~')}}>OoO --__--</button>
  </div>
  </div>
  )
}

export default ClientComponent;
