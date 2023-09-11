"use client"

import { useSelector, useDispatch } from 'react-redux';
import { updateStor_data} from '../redux/reducer';


const Capp = (()=>{
    const Stor_data = useSelector((state) => state.counter.Tdata);
    const dispatch = useDispatch()

    return(
        <>
        {Stor_data}
        </>
    )
})
  

  export default Capp;