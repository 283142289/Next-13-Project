
//reducers.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    counterValue:0,
    Tdata:6666,
    Stor_data:['007'],

  },

  reducers: {
    increment: (state) => {
      state.counterValue += 1;
    },
    decrement: (state) => {
      state.counterValue -= 1;
    },
    updateTdata: (state, action) => {
      state.Tdata = action.payload;
    },

    updateStor_data: (state, action) => {
      state.Stor_data = action.payload;
    },

  },
});

export const { increment, decrement, updateTdata, updateStor_data  } = counterSlice.actions;
export default counterSlice.reducer; 
