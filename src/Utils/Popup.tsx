import React from 'react';
import {  Snackbar, Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Redux/Store';
import { setPopUp } from '../Redux/UserFlow';

const PopUp = () => {
const open=useSelector((state:RootState)=>state.userFlow.popup)
const message=useSelector((state:RootState)=>state.userFlow.message)
const dispatch=useDispatch<AppDispatch>()

const handleClose = (e: React.SyntheticEvent | Event, reason?: string) => {
    if (e && 'preventDefault' in e) {
      e.preventDefault();
    }
  
    if (reason === 'clickaway') {
      return;
    }
  
    dispatch(setPopUp(false));
  };

  return (
    <>
   

      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ 
          width: '100%' ,
          border: '1px solid darkgreen', // Dark green border
          boxShadow: '0 2px 10px rgba(0, 128, 0, 0.2)', // Optional shadow for effect
          
          }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default PopUp;
