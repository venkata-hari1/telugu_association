import { configureStore } from '@reduxjs/toolkit';
import userFlowReducer from './UserFlow'; 
import authreducer from '../fetures/auth/authSlice';


const store = configureStore({
  reducer: {
    userFlow: userFlowReducer,
    login:authreducer,
  }, 
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
