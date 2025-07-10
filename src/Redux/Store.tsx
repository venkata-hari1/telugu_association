import { configureStore } from '@reduxjs/toolkit';
import userFlowReducer from './UserFlow'; 
import authreducer from '../fetures/auth/authSlice';
import galleryReducer from '../Redux/gallarySlice';



const store = configureStore({
  reducer: {
    userFlow: userFlowReducer,
    login:authreducer,
    gallery: galleryReducer,
  }, 
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


export default store;
