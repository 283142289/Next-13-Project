// selector.js
/* export const selectCount = state => state.counter.count

// getServerSideProps 
import { selectCount } from './selector'

export const getServerSideProps = store => {
  const count = selectCount(store.getState())
} */

/* 
export default  selectCount = state => state.counter.Tdata
 */

"use client"
import { useSelector, useDispatch } from 'react-redux';
import { updateTdata} from './redux/reducer'; 
import { useEventHandler } from 'react';

const AP=(({Mdata})=>{
  const Stor_data = useSelector((state) => state.counter.Tdata); 
  const dispatch = useDispatch()


  function handleClick() {
    console.log('Button clicked!')

  }

  return(    
  <div>
    <h1>selectCount~~~{JSON.stringify(Mdata)}</h1>
    <p className=' bg-orange-600'>{Stor_data}</p>
   {/*  <button onClick={handleClick}>Increment</button> */}
    <button onClick={handleClick}>Click Me</button>

  </div>
  )
})

export default AP;