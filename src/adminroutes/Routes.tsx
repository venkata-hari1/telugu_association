import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Membershiptable from '../components/Membershiptable'
import Subscriptionplans from '../components/Subscriptionplans'

const AppRoutes = () => {
  return (
    <Routes>
     <Route path='/membershiptable' element={<Membershiptable />}/>
     <Route path='/subscriptionplans' element={<Subscriptionplans />}/>
    </Routes>  

  )
}

export default AppRoutes
