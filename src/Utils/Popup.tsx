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
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default PopUp;
