  // store.js
'use client'

  import { configureStore } from '@reduxjs/toolkit'

  import { combineReducers } from 'redux'

  import { persistReducer } from 'redux-persist'

  import storage from 'redux-persist/lib/storage'

  import counterReducer from './reducer'

  const reducers = combineReducers({

    counter: counterReducer

  })

  const persistConfig = {
    key: 'root',
    storage 
  }

  const persistedReducer = persistReducer(persistConfig, reducers)

  const store = configureStore({

    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({
        serializableCheck: false,
      }),

  })

  export default store


